import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestCreateCard } from "state/createCard/actions";
import { CreateCardSelector } from "state/createCard/selectors";
// Components
import CreateCardForm from "components/CreateCard/CreateCardForm";
// Styles
import "./index.scss";

const CreateCardView = () => {
	const [payload, setPayload] = useState(null);
	const history = useHistory();
	const d = useDispatch();
	const { data, loading, error } = useSelector((state) => CreateCardSelector(state));

	useEffect(() => {
		if (payload === null) {
			return;
		}
		d(requestCreateCard(payload));
	}, [d, payload]);

	useEffect(() => {
		if (error) console.log("ups la cagamos con algo");
		if (loading) console.log("estamos esperando que termine la request :D");
		if (!loading) console.log("ya no estamos esperando (?)");
		if (data) {
			console.log("desde backed me llego esto:", data);
			const cardId = data.id;
			history.push(`/details/${cardId}`);
		}
	}, [data, loading, error]);

	return (
		<div className="create-card-container">
			<h1>Agregar artículo</h1>
			<CreateCardForm setPayload={setPayload} />
		</div>
	);
};

export default CreateCardView;
