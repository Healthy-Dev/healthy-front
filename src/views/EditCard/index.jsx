import React from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
//import { useUserSession } from "hooks/useUserSession";

import { useDispatch, useSelector } from "react-redux";
import { requestEditCard } from "state/cards/actions";
import { EditCardSelector } from "state/cards/selectors";

import CardForm from "components/CardForm/";
import Alert from "components/_shared/Alert";

const EditCard = ({ history }) => {
	const { state } = history.location;
	const { id } = useParams();
	const token = '';
	const dispatch = useDispatch();

	const { data: success, error } = useSelector(state => EditCardSelector(state));

	function updateCard(payload) {
		dispatch(requestEditCard({ cardId: id, token, payload }));
	}


	return (
		<div className="edit">
			{error && <Alert error showButtonClose>No se pudo actulizar, Intentelo mas tarde</Alert>}
			{success && <Alert seccess showButtonClose>Se actualizo su tarjeta correctamente</Alert>}
			{state && <CardForm sendForm={updateCard} loading={null} data={state} />}
		</div>
	);
};

export default EditCard;
