import React from "react";
// Styles
import "./index.scss";

const AddCardButton = ({ onClick }) => {
	return (
		<button className="AddCardButton" type="submit" onClick={onClick}>
			<p>Agregar artículo</p>
		</button>
	);
};

export default AddCardButton;
