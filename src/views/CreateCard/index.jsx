import React from "react";
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestCreateCard } from "state/cards/actions";
import { CreateCardSelector } from "state/cards/selectors";
// Components
import CardForm from "components/CardForm";
import Alert from "components/_shared/Alert";
import TopNavbar from "components/_shared/TopNavbar";
// Styles
import "./index.scss";
import useAuth from "hooks/useAuth";

const CreateCardView = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { error, loading } = useSelector((state) => CreateCardSelector(state));
	const { token } = useAuth();

	function createCard(data) {
		dispatch(requestCreateCard({ token, data }));
		setTimeout(() => history.replace("/"), 3500);
	}

	return (
		<>
			<TopNavbar title="Agregar Articulo" />
			<div className="create-card-container">
				{error && (
					<Alert showButtonClose error>
						No se pudo crear su tarjeta, Vulve a intentelo mas tarde!
					</Alert>
				)}

				<CardForm sendForm={createCard} loading={loading} data={""} />
			</div>
		</>
	);
};

export default CreateCardView;
