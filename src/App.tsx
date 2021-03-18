import Modal from "react-modal";
import { useState } from "react";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { ModalTransaction } from "./components/ModalTransaction";

Modal.setAppElement("#root");

export function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }
  return (
    <>
      <Header openModal={handleOpenModal} />
      <Dashboard />
      <ModalTransaction
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
}
