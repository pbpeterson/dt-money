import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export default function TransactionsTable() {

  useEffect(()=>{
    async function request(){
      const req = await api('/transactions')
      const json = req.data
      console.log(json)
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
          <tr>
            <td className='title'>Desenvolvimento de Website</td>
            <td className='deposit'>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td className='title'>Aluguel</td>
            <td className='withdraw'>-R$1.000</td>
            <td>Desenvolvimento</td>
            <td>20/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
