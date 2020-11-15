import React from "react";
import Card from "../Card";
import "./index.scss";

const ListCards = ({ cards }) => {
	console.log(cards);
	return (
		<div className="list-cards">
			{cards &&
				cards.map((card) => (
					<Card
						key={card.id}
						img={card.photo}
						title={card.title}
						id={card.id}
						creator={card.creator}
						likesCount={card.likesCount}
					/>
				))}
		</div>
	);
};

export default ListCards;
