import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const ILikeContext = createContext();
const CardsILikeProvider = ({ children }) => {
	const [cards, setCards] = useState([]);

	function setCardsILike(cards) {
		setCards(cards);
	}

	function setCardILike(card) {
		setCards((state) => [...state, { card }]);
	}

	function deleteCardILike(id) {
		const deleteCard = cards.filter((card) => card.id !== id);
		setCards(deleteCard);
	}

	return (
		<ILikeContext.Provider
			value={{
				cardsILike: cards,
				setCardILike,
				setCardsILike,
				deleteCardILike,
			}}
		>
			{children}
		</ILikeContext.Provider>
	);
};

export default CardsILikeProvider;
