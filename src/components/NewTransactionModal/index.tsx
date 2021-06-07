import Modal from 'react-modal'
import {Container} from './styles'

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: ()=> void
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  
  return (
    <Modal isOpen={isOpen} 
          onRequestClose={onRequestClose}
          overlayClassName='react-modal-overlay'
          className='react-modal-content'
    >
      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder='Titulo'/>
        <input placeholder='valor' type='number'/>
        <input placeholder='Categoria'/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>

  )
}
