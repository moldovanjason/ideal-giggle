import './App.css';
import Modal from './Components/Modal';
import React, { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="App">
      <h1>Hey, click the button to open the modal.</h1>
      <button className="openModalBtn" onClick={() => setOpenModal(true)}>Open</button>
      {openModal && <Modal closeModal={setOpenModal} />}
      <div className="moreStuff">More Stuff to be added soon!</div>
    </div>
  );
}

export default App;
