import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import React, { useState } from "react";
import NewTransactionModal from "./components/NewTransactionModal";
import { TransactionsProvider } from "./components/TransactionsContext";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }
  
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>


      <Dashboard/>

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>

      <GlobalStyle/>
    </TransactionsProvider>
  );
}
