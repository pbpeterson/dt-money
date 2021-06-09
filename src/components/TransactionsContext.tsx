import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title:string;
  amount:number;
  type:string;
  category:string;
  createAt:string
}

interface TransactionContextData{
  transactions: Transaction[],
  createTransaction: (transaction: NewTransaction) => Promise<void>
}

type NewTransaction = Omit<Transaction, 'id' | 'createAt'>

interface TransactionsProviderProps{
  children: ReactNode
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
  )

export function TransactionsProvider({children}:TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(()=>{
    async function request(){
      const req = await api('/transactions')
      const json = req.data
      setTransactions(json.transactions)
    }
    request()
  },[])

  async function createTransaction(NewTransaction: NewTransaction) {
    const response = await api.post('/transactions', {
      ...NewTransaction,
       createAt: new Date()
      })
    const {transaction} = response.data

    setTransactions([
      ...transactions,
      transaction])

  };


  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )

}