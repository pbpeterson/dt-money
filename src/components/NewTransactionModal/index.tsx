import { FormEvent, useContext, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/entrada.svg'
import outcomeImg from '../../assets/saidas.svg'
import { RadioBox, TransactionTypeContainer } from '../../styles/global'
import { TransactionsContext } from '../TransactionsContext'
import {Container} from './styles'

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: ()=> void
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit') 

const {createTransaction} = useContext(TransactionsContext)

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    })
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose()
  }
  
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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input placeholder='Titulo' value={title} onChange={event => setTitle(event.target.value)}/>
        <input placeholder='valor' type='number' value={amount} onChange={event => setAmount(Number(event.target.value))}/>
        <TransactionTypeContainer>
          <RadioBox
            type='button'
            isActive ={type ==='deposit'}
            onClick={()=>{setType('deposit')}}
            activeColor = 'green'
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            isActive ={type ==='withdraw'}
            onClick={()=>{setType('withdraw')}}
            activeColor = 'red'
            >
              <img src={outcomeImg} alt="Saida" />
              <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input placeholder='Categoria' value={category} onChange={(event)=>{setCategory(event.target.value)}}/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>

  )
}
