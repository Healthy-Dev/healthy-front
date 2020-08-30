import React from "react";
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
	const history = useHistory();
	const d = useDispatch();
	const { error, loading } = useSelector((state) => CreateCardSelector(state));

	function createCard(payload) {
		d(requestCreateCard(payload));
		if(!error) history.push("/");
	}

	return (
		<div className="create-card-container">
			{error && <p>Ocurrio un error al guaradar post, Intentalo mas tarde</p>}
			<h1>Agregar artículo</h1>
			<CreateCardForm createCard={createCard} loading={loading} />
		</div>
	);
};

export default CreateCardView;
