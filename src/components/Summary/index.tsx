import { useContext } from 'react';
import incomeImg from '../../assets/entrada.svg'
import outcomeImg from '../../assets/saidas.svg'
import totalImg from '../../assets/Total.svg'
import { TransactionsContext } from '../TransactionsContext';
import { Container } from "./styles";

export default function Summary() {
  const {transactions} = useContext(TransactionsContext)

  const summary = transactions.reduce((acc, transaction)=>{
      if(transaction.type ==='deposit'){
        acc.deposits += transaction.amount;
        acc.total += transaction.amount
      }else{
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc
  },{
    deposits:0,
    withdraws:0,
    total:0,
  })

  return (
    <div>
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={incomeImg} alt="" />
          </header>
          <strong>
            {new Intl.NumberFormat('pt-BR',{
                style:'currency',
                currency:'BRL'
              })
              .format(summary.deposits)}</strong>
        </div>
        <div>
          <header>
            <p>Saídas</p>
            <img src={outcomeImg} alt="" />
          </header>
          <strong>{new Intl.NumberFormat('pt-BR',{
                style:'currency',
                currency:'BRL'
              })
              .format(summary.withdraws)}</strong>
        </div>
        <div className='hightlight-background'>
          <header>
            <p>Total</p>
            <img src={totalImg} alt="" />
          </header>
          <strong>{new Intl.NumberFormat('pt-BR',{
                style:'currency',
                currency:'BRL'
              })
              .format(summary.total)}</strong>
        </div>
      </Container>
    </div>
  )
}
