import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "components/CardDetails";
import Loading from "components/_shared/Loading";
import NotFound from "views/ErrorPage";

import { useDispatch, useSelector } from "react-redux";
import { requestDetails } from "state/cardDetails/actions";
import { getUserRequest } from "state/user/actions";

import { CardDetailsSelector } from "state/cardDetails/selectors";
import { requestDeleteCard } from "state/cards/actions";
import { UserSelector } from "state/user/selectors";

//import { useUserSession } from "hooks/useUserSession";

const CardDetailsView = () => {
	const dispatch = useDispatch();
	const { cardId } = useParams();
	const token = "";

	const {
		data: cardData,
		loading: cardLoading,
		error: cardError,
	} = useSelector((state) => CardDetailsSelector(state));

	const { data: userData } = useSelector((state) => UserSelector(state));

	useEffect(() => {
		dispatch(requestDetails({ cardId }));
		dispatch(getUserRequest({ token }));
	}, [dispatch]); //eslint-disable-line

	function isYourCard() {
		if (cardData && userData) {
			if (cardData.creator.id === userData.user.id) 
				return true;
			else return false;
		}
	}

	function deleteCard() {
		dispatch(requestDeleteCard({ cardId, token }));
	}

	return (
		<div className="card__detail">
			{cardError && <NotFound />}
			{cardLoading && <Loading />}
			{cardData && (
				<Card data={cardData} isYourCard={isYourCard} deleteCard={deleteCard} />
			)}
		</div>
	);
};

export default CardDetailsView;
