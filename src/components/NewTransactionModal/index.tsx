import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/entrada.svg'
import outcomeImg from '../../assets/saidas.svg'
import { TransactionTypeContainer } from '../../styles/global'
import {Container} from './styles'

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: ()=> void
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button 
        type='button' 
        onClick={onRequestClose} 
        className='react-modal-close'
        >
        <img src={closeImg} alt="FecharModal" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder='Titulo'/>
        <input placeholder='valor' type='number'/>
        <TransactionTypeContainer>
          <button
            type='button'
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
          </button>

          <button
            type='button'
            >
              <img src={outcomeImg} alt="Saida" />
              <span>Saida</span>
          </button>
        </TransactionTypeContainer>
        <input placeholder='Categoria'/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>

  )
}
