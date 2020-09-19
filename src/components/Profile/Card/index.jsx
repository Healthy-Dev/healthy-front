import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Card = ({ img, title, id }) => {
	return (
		<Link to={`/details/${id}`}>
			<div className="card__profile">
				<img className="card__profile--img" alt="card" src={img} />
				<div className="card__profile--detail">
					<h2>{title}</h2>
				</div>
			</div>
		</Link>
	);
};

export default Card;
