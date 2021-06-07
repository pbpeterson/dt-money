import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title:string;
  amount:number;
  type:string;
  category:string;
  createAt:string
}

export default function TransactionsTable() {

  const [transactions, setTransactions] = useState([])

  useEffect(()=>{
    async function request(){
      const req = await api('/transactions')
      const json = req.data
      setTransactions(json.transactions)
    }
    request()
  },[])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transacao: Transaction)=>(
            <tr key={transacao.id}>
              <td className='title'>{transacao.title}</td>
              <td className={transacao.type}>{transacao.type ==='withdraw'? `-${new Intl.NumberFormat('pt-BR',{
                style:'currency',
                currency:'BRL'
              }).format(transacao.amount)}`
              : 
              `${new Intl.NumberFormat('pt-BR',{
                style:'currency',
                currency:'BRL'
              }).format(transacao.amount)}`}</td>
              <td>{transacao.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(
                new Date(transacao.createAt)
              )}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </Container>
  )
}
