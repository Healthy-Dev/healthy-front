import React from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";

const Card = ({ img, title, id }) => {
	const history = useHistory();

	function handleClick() {
		history.push(`/details/${id}`);
	}

	return (
		<div className="card" onClick={handleClick}>
			<div className="card__img">
				<img src={img} alt="card" />
			</div>
			<h2>{title}</h2>
		</div>
	);
};

export default Card;
