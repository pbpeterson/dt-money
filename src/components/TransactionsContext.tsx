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

interface TransactionsProviderProps{
  children: ReactNode
}

export const TransactionsContext = createContext<Transaction[]>([])

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

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )

}