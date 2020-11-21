import React, { useState, useEffect } from "react";
import "./index.scss";
import { ReactComponent as MoreIcon } from "assets/icons/more-vert.svg";
import ModalOptions from "./ModalOptions";

const MoreOptions = ({ optionsModal }) => {
	const [showModal, setShowModal] = useState(false);

	// Usamos esta funcionalidad para ocultar el modal cuando se hace click fuera de este
	useEffect(() => {
		const outModalFocus = (e) => {
			if (e.target.parentNode.className !== "more__modal") setShowModal(false);
		};
		document.body.addEventListener("click", outModalFocus);

		return () => document.body.removeEventListener("click", outModalFocus);
	}, []);

	function handleClick(fn) {
		fn();
		setShowModal(false);
	}

	return (
		<div className="more" onClick={() => setShowModal(!showModal)}>
			<MoreIcon className="more__icon" />
			{showModal && (
				<ModalOptions optionsModal={optionsModal} handleClick={handleClick} />
			)}
		</div>
	);
};

export default MoreOptions;
