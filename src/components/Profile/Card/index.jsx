import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
//import { ReactComponent as LikesHeart } from "assets/icons/likes-heart.svg";

const Card = ({ img, title, id }) => {
	return (
		<Link to={`/details/${id}`}>
			<div className="card">
				<img className="card__img" alt="test" src={img} />
				<div className="card__detail">
					<h2>{title}</h2>
				</div>
			</div>
		</Link>
	);
};

export default Card;
