import React from "react";
import "./index.scss";
import plusIcon from "assets/icons/plus-icon.png";
import { Link } from "react-router-dom";

const CreateCardButton = () => {
	return (
		<Link to="/new">
			<button className="home-button">
				<img src={plusIcon} alt="icon plus" />
			</button>
		</Link>
	);
};

export default CreateCardButton;
