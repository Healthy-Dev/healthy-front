import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "components/CardDetails";
import Loading from "components/_shared/Loading";
import NotFound from "views/ErrorPage";

import { useDispatch, useSelector } from "react-redux";
import { requestDetails } from "state/cardDetails/actions";
import { getUserRequest } from "state/user/actions";

import { CardDetailsSelector } from "state/cardDetails/selectors";
import { UserSelector } from "state/user/selectors";
import { DeleteCardSelector } from "state/cards/selectors";
import { requestDeleteCard } from "state/cards/actions";

import useAuth from "hooks/useAuth";
import Alert from "components/_shared/Alert";

const CardDetailsView = ({ history }) => {
	const dispatch = useDispatch();
	const { cardId } = useParams();
	const { token } = useAuth();

	const {
		data: cardData,
		loading: cardLoading,
		error: cardError,
	} = useSelector((state) => CardDetailsSelector(state));

	const { data: userData } = useSelector((state) => UserSelector(state));
	const { data: deleteCardData, error: deleteCardError } = useSelector((state) =>
		DeleteCardSelector(state),
	);

	useEffect(() => {
		if (!cardData || cardData.id !== +cardId) dispatch(requestDetails({ cardId }));
		if (!userData) dispatch(getUserRequest({ token }));
		if (deleteCardData) history.replace("/");
	}, [dispatch]); //eslint-disable-line

	function isYourCard() {
		if (cardData && userData) {
			if (cardData.creator.id === userData.user.id) return true;
			else return false;
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
				<Card data={cardData} isYourCard={isYourCard} deleteCard={deleteCard} />
			)}
		</div>
	);
};

export default CardDetailsView;
