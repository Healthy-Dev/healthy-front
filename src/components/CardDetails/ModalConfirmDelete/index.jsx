import React from 'react'
import "./index.scss";
import { useHistory } from "react-router-dom";
import Alert from "components/_shared/Alert";

const ModalConfirmDelete = ({ toggleModalConfirm, deleteCard,  id }) => {
  const history = useHistory();

  function confirmDeleteCard() {
    console.log("Eliminar esta card con id: ", id);
    toggleModalConfirm();
    deleteCard();
    history.push("/profile");
  }

  return (
    <div className="modal__confirm">
      <Alert success={true} showButtonClose={false} >
        Queres Eliminar este articulo?
      </Alert>
      <div className="modal__confirm--buttons">
        <button onClick={confirmDeleteCard}>Si, Eliminar</button>
        <button onClick={() => toggleModalConfirm()}>Ups, no</button>
      </div>
    </div>
  )
}

export default ModalConfirmDelete
