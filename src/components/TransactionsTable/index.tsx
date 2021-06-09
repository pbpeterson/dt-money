import { useContext } from "react";
import { TransactionsContext } from "../TransactionsContext";
import { Container } from "./styles";

export default function TransactionsTable() {
  const {transactions} = useContext(TransactionsContext)

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
          {transactions.map((transacao)=>(
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
