import React from "react";
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestCreateCard } from "state/cards/actions";
import { CreateCardSelector } from "state/cards/selectors";
// Components
import CardForm from "components/CardForm";
import Alert from "components/_shared/Alert";
// Styles
import "./index.scss";
import useAuth from "hooks/useAuth";

const CreateCardView = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { error, loading } = useSelector((state) => CreateCardSelector(state));
	const { token } = useAuth();

	function createCard(data) {
		console.log(data);
		dispatch(requestCreateCard({ token, data }));
		setTimeout(() => history.replace("/"), 3500);
	}

	return (
		<div className="create-card-container">
			{error && (
				<Alert showButtonClose error>
					No se pudo crear su tarjeta, Vulve a intentelo mas tarde!
				</Alert>
			)}
			<h1>Agregar artículo</h1>
			<CardForm sendForm={createCard} loading={loading} data={""} />
		</div>
	);
};

export default CreateCardView;
