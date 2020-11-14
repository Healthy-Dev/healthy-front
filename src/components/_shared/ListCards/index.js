import React from "react";
import Card from "../Card";
import "./index.scss";

const ListCards = ({ cards }) => {
	return (
		<div className="list-cards">
			{cards &&
				cards.map((card) => (
					<Card key={card.id} img={card.photo} title={card.title} id={card.id} />
				))}
		</div>
	);
};

export default ListCards;
