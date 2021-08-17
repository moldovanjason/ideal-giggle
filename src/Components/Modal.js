import React, { useState } from "react";
import "./Modal.css";

function Modal({closeModal}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="titleCloseBtn" onClick={() => closeModal(false)}> X </button>
        <div className="title">
          <h2>Are You Sure You Want To Continue?</h2>
        </div>
        <div className="body">
          <p>
            The Next Page Is Awesome! You Should Move Forward, You Will Enjoy
            It.
          </p>
        </div>
        <div className="footer">
          <button id="cancelBtn" onClick={() => closeModal(false)}>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
