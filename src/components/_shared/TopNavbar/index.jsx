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
			<button onClick={goBack}>Cancelar</button>
			<h2>{title}</h2>
		</div>
	);
};

export default TopNavBar;
