import React from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";
import Likes from "../Likes";

const CardThumbnail = ({ img, title, id, isILiked, likesCount }) => {
	const history = useHistory();

	function handleClick() {
		history.push(`/details/${id}`);
	}
	return (
		<div className="card-thumbnail" onClick={handleClick}>
			<section className="card-thumbnail__top">
				<Likes isILiked={isILiked} likesCount={likesCount} />
			</section> 
			<div className="card-thumbnail__img">
				<img src={img} alt="card" />
			</div>
			<div className="card-thumbnail__header">
				<h2>{title}</h2>
			</div>
		</div>
	);
};

export default CardThumbnail;
