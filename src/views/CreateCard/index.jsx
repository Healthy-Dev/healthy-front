import React, { useContext } from "react";
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
import { ContextModal } from "hooks/useModal";

const CreateCardView = () => {
	const { hiddenModal } = useContext(ContextModal);
	const dispatch = useDispatch();
	const { data, error, loading } = useSelector((state) => CreateCardSelector(state));
	const { token } = useAuth();

	function createCard(data) {
		dispatch(requestCreateCard({ token, data }));
		setTimeout(() => hiddenModal(), 3500);
	}

	return (
		<>
			<TopNavbar title="Agregar Articulo" />
			<div className="create-card-container">
				{error && (
					<Alert showButtonClose error>
						No se pudo crear su tarjeta, Vuelve a intentelo mas tarde!
					</Alert>
				)}
				{data && (
					<Alert showButtonClose success>
						Se creo tu tarjeta correctamente!
					</Alert>
				)}

				<CardForm sendForm={createCard} loading={loading} data={""} />
			</div>
		</>
	);
};

export default CreateCardView;
