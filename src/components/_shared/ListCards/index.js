import React from "react";
import CardThumbnail from "../CardThumbnail";
import "./index.scss";

const ListCards = ({ cards, userId } ) => {
	console.log('las card', cards, userId);
	return(
	<div className="list-cards">
		{cards &&
			cards.map((card) => (
				<CardThumbnail
					key={card.id}
					img={card.photo}
					title={card.title}
					id={card.id}
					creator={card.creator}
					likesCount={card.likesCount}
					isILiked={userId && card.likesBy.some((like) => like.id === userId)}
				/>
			))}
	</div>);
};

export default ListCards;
