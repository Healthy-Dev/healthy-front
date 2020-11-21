import React from "react";
import "./index.scss";

const ModalConfirmDelete = ({ toggleModalConfirm, deleteCard, id }) => {
	function confirmDeleteCard() {
		console.log("Eliminar esta card con id: ", id);
		toggleModalConfirm();
		deleteCard();
	}

	return (
		<div className="modal__confirm">
			<p>Queres Eliminar este articulo?</p>
			<div className="modal__confirm--buttons">
				<button onClick={confirmDeleteCard}>Si, Eliminar</button>
				<button onClick={toggleModalConfirm}>Ups, no!</button>
			</div>
		</div>
	);
};

export default ModalConfirmDelete;
