import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Card = ({ img, title, id }) => {
	return (
		<Link to={`/details/${id}`}>
			<div className="card">
				<img src={img} alt="card" />
				<div>
					<h2>{title}</h2>
				</div>
			</div>
		</Link>
	);
};

export default Card;
