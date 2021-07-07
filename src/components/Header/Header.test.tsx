import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Header } from './index'

describe('Header', ()=>{
  it('should have button', ()=>{
    render(<Header onOpenNewTransactionModal={()=>{}}/>)
    
    expect(screen.getByText('Nova Transação')).toBeInTheDocument()
    
  })
  
})