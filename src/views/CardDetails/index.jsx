import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "components/CardDetails";
import Loading from "components/_shared/Loading";
import Alert from "components/_shared/Alert";
import NotFound from "views/ErrorPage";

import { useDispatch, useSelector } from "react-redux";
import { requestGetCard } from "state/cards/actions";
import { getUserRequest } from "state/user/actions";
import { requestDeleteCard } from "state/cards/actions";

import { GetCardSelector } from "state/cards/selectors";
import { UserSelector } from "state/user/selectors";
import { DeleteCardSelector } from "state/cards/selectors";

import useAuth from "hooks/useAuth";

const CardDetailsView = ({ history }) => {
	const dispatch = useDispatch();
	const { cardId } = useParams();
	const { token } = useAuth();

	const {
		data: cardData,
		loading: cardLoading,
		error: cardError,
	} = useSelector((state) => GetCardSelector(state));

	const { data: userData } = useSelector((state) => UserSelector(state));
	const { error: deleteCardError } = useSelector((state) => DeleteCardSelector(state));

	useEffect(() => {
		if (!cardData || cardData.id !== +cardId) dispatch(requestGetCard({ cardId }));
		if (!userData) dispatch(getUserRequest({ token }));
	}, [dispatch, cardData]); //eslint-disable-line

	function isYourCard() {
		if (cardData && userData) {
			return cardData.creator.id === userData.user.id;
		}
	}

	function isLikedByMe() {
		if (cardData && userData) {
			return cardData.likesBy.some((like) => userData.user.id === like.id);
		}
	}

	function deleteCard() {
		dispatch(requestDeleteCard({ cardId, token }));
	}

	return (
		<div>
			{cardError && <NotFound />}
			{cardLoading && <Loading />}
			{deleteCardError && (
				<Alert error showButtonClose className="alert-delete-card">
					No se pudo elimar!, Intentelo mas tarde
				</Alert>
			)}
			{cardData && (
				<Card
					data={cardData}
					isYourCard={isYourCard}
					deleteCard={deleteCard}
					isLikedByMe={isLikedByMe}
				/>
			)}
		</div>
	);
};

export default CardDetailsView;
