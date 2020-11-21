import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { requestGetCards } from "state/cards/actions";
import { GetCardsSelector } from "state/cards/selectors";
import { getUserRequest } from "state/user/actions";
import { UserSelector } from "state/user/selectors";
import useAuth from "hooks/useAuth";

export const ILikeContext = createContext();
const CardsILikeProvider = ({ children }) => {
	const [cards, setCards] = useState([]);

	const { token, isAuth } = useAuth();
	const dispatch = useDispatch();
	const { data: userData, loading } = useSelector((state) => UserSelector(state));
	const { data: cardsData } = useSelector((state) => GetCardsSelector(state));

	useEffect(() => {
		if (isAuth) {
			if (!cardsData) dispatch(requestGetCards());
			if (!userData) dispatch(getUserRequest({ token }));
		}
	}, [dispatch, cardsData]); //eslint-disable-line

	useEffect(() => {
		if (cardsData && userData) {
			const getCards = cardsData.filter((card) =>
				card.likesBy.find((like) => like.id === userData.user.id),
			);

			setCards(getCards);
		}
	}, [cardsData, userData]); //eslint-disable-line

	function setCardILike(id) {
		const getCard = cardsData.filter((card) => card.id === id);
		setCards((state) => [...state, ...getCard]);
	}

	function deleteCardILike(id) {
		const deleteCard = cards.filter((card) => card.id !== id);
		setCards(deleteCard);
	}

	return (
		<ILikeContext.Provider
			value={{
				cardsILike: cards,
				loading,
				setCardILike,
				deleteCardILike,
			}}
		>
			{children}
		</ILikeContext.Provider>
	);
};

export default CardsILikeProvider;
