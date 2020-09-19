import React, { useEffect } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { requestDetails } from "state/cardDetails/actions";
import { CardDetailsSelector } from "state/cardDetails/selectors";

import CardForm from "components/CardForm/";

const EditCard = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { data, error } = useSelector((state) => CardDetailsSelector(state));

	useEffect(() => {
		dispatch(requestDetails({ url: `v1/cards/${id}` }));
	}, [dispatch, id]); //eslint-disable-line

	// TODO: Crear funcionalidad para actualizar la card
	function updateCard(payload) {
		console.log(payload);
		// crear una nueva peticion al backend para mandar los nuevo datos y actualizar la card
		// dispatch(requestEdit({ url: `v1/cards/${id}` }))
	}

	return (
		<div className="edit">
			{error && <p>No se encontro lo que buscabas!</p>}
			{data && <CardForm sendForm={updateCard} loading={null} data={data} />}
		</div>
	);
};

export default EditCard;
