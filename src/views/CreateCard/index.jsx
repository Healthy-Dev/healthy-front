import React from "react";
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestCreateCard } from "state/createCard/actions";
import { CreateCardSelector } from "state/createCard/selectors";
// Components
// import CreateCardForm from "components/CreateCard/CreateCardForm";
import CardForm from "components/CardForm";
// Styles
import "./index.scss";

const CreateCardView = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { error, loading } = useSelector((state) => CreateCardSelector(state));

	function createCard(payload) {
		dispatch(requestCreateCard(payload));
		if(!error) history.push("/");
	}

	return (
		<div className="create-card-container">
			{error && <p>Ocurrio un error al guaradar post, Intentalo mas tarde</p>}
			<h1>Agregar artículo</h1>
			<CardForm sendForm={createCard} loading={loading} data={{}} />
		</div>
	);
};

export default CreateCardView;
