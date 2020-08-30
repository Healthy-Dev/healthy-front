import React from 'react'
import "./index.scss";
import Alert from "components/_shared/Alert";

const ModalConfirmDelete = ({ toggleModalConfirm }) => {
  return (
    <div className="modal__confirm">
      <Alert success={true} showButtonClose={false} >
        Queres Eliminar este articulo?
      </Alert>
      <div className="modal__confirm--buttons">
        <button>Si, Eliminar</button>
        <button onClick={() => toggleModalConfirm()}>Ups, no</button>
      </div>
    </div>
  )
}

export default ModalConfirmDelete
