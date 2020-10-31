import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Card from "components/CardDetails";
import Loading from "components/_shared/Loading";
import Alert from "components/_shared/Alert";
import NotFound from "views/ErrorPage";

import { useDispatch, useSelector } from "react-redux";
import {
	requestGetCard,
	requestLikedCards,
	requestDislikedCards,
} from "state/cards/actions";
import { getUserRequest } from "state/user/actions";
import { requestDeleteCard } from "state/cards/actions";

import { GetCardSelector } from "state/cards/selectors";
import { UserSelector } from "state/user/selectors";
import { DeleteCardSelector } from "state/cards/selectors";

import useAuth from "hooks/useAuth";
import Layout from "components/_shared/Layout";

const CardDetailsView = () => {
	const [isILiked, setILiked] = useState(false);
	const dispatch = useDispatch();
	const { token } = useAuth();
	const { cardId } = useParams();

	const {
		data: cardData,
		loading: cardLoading,
		error: cardError,
		likesCount,
		isLikedByMe,
	} = useSelector((state) => GetCardSelector(state));

	const { data: userData } = useSelector((state) => UserSelector(state));
	const { error: deleteCardError } = useSelector((state) => DeleteCardSelector(state));

	useEffect(() => {
		if (!cardData || cardData.id !== +cardId) dispatch(requestGetCard({ cardId }));
		if (!userData) dispatch(getUserRequest({ token }));

		if (userData && isLikedByMe !== undefined) {
			setILiked(isLikedByMe(userData.user.id));
		}
	}, [dispatch, cardData, userData]); //eslint-disable-line

	function isYourCard() {
		if (cardData && userData) {
			return cardData.creator.id === userData.user.id;
		}
	}

	function deleteCard() {
		dispatch(requestDeleteCard({ cardId, token }));
	}

	const iLiked = () => {
		dispatch(requestLikedCards({ idCard: cardId, token }));
		setILiked(true);
	};

	const disLiked = () => {
		dispatch(requestDislikedCards({ idCard: cardId, token }));
		setILiked(false);
	};

	return (
		<Layout title="Detalle de tarjeta">
			<div className="card__detail">
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
						isILiked={isILiked}
						likesCount={likesCount}
						iLiked={iLiked}
						disLiked={disLiked}
					/>
				)}
			</div>
		</Layout>
	);
};

export default CardDetailsView;
