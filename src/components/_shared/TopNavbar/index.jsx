import React, { useContext } from "react";
import "./index.scss";
import { ContextModal } from "hooks/useModal";

const TopNavBar = ({ title }) => {
	const { hiddenModal } = useContext(ContextModal);

	function goBack() {
		hiddenModal();
	}

	return (
		<div className="top-navbar">
			<h2>{title}</h2>
			<button onClick={goBack}>Cancelar</button>
		</div>
	);
};

export default TopNavBar;
