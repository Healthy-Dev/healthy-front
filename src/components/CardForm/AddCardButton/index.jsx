import React from "react";
// Styles
import "./index.scss";

const AddCardButton = ({ children }) => {
	return (
		<button className="AddCardButton" type="submit">
			{children}
		</button>
	);
};

export default AddCardButton;
