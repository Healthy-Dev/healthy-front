import React from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";
import { ReactComponent as LikesIcon } from "assets/icons/heart.svg";

const Card = ({ img, title, id, creator, likesCount }) => {
	const history = useHistory();

	function handleClick() {
		history.push(`/details/${id}`);
	}

	return (
		<div className="card">
			<section className="card__top">
				<div className="card__top--user">
					<img src={creator.profilePhoto} alt={creator.name} />
					<h3>{creator.name}</h3>
				</div>
				<div className="card__top--likes">
					<LikesIcon />
					<p>{likesCount}</p>
				</div>
			</section>
			<div className="card__img" onClick={handleClick}>
				<img src={img} alt="card" />
			</div>
			<h2>{title}</h2>
		</div>
	);
};

export default Card;
