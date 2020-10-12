import React from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";

const TopNavBar = ({ title }) => {
	const history = useHistory();

	function goBack() {
		history.goBack();
	}

	return (
		<div className="top-navbar">
			<button onClick={goBack}>Cancelar</button>
			<h2>{title}</h2>
		</div>
	);
};

export default TopNavBar;
