import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/saidas.svg'
import totalImg from '../../assets/Total.svg'
import { Container } from "./styles";

export default function Summary() {
  return (
    <div>
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={incomeImg} alt="" />
          </header>
          <strong>R$1000,00</strong>
        </div>
        <div>
          <header>
            <p>Saídas</p>
            <img src={outcomeImg} alt="" />
          </header>
          <strong>-R$500,00</strong>
        </div>
        <div className='hightlight-background'>
          <header>
            <p>Total</p>
            <img src={totalImg} alt="" />
          </header>
          <strong>R$500,00</strong>
        </div>
      </Container>
    </div>
  )
}
