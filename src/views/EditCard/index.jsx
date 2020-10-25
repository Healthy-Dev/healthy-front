import React from "react";
import "./index.scss";
//import { useUserSession } from "hooks/useUserSession";

import TopNavbar from "components/_shared/TopNavbar";

import { useDispatch, useSelector } from "react-redux";
import { requestEditCard } from "state/cards/actions";
import { EditCardSelector } from "state/cards/selectors";

import CardForm from "components/CardForm/";
import Alert from "components/_shared/Alert";
import useAuth from "hooks/useAuth";
import { useContext } from "react";
import { ContextModal } from "hooks/useModal";

const EditCard = ({ history }) => {
	const { id, extra: state } = useContext(ContextModal);
	const { token } = useAuth();
	const dispatch = useDispatch();

	const { data: success, error, loading } = useSelector((state) =>
		EditCardSelector(state),
	);

	function updateCard(payload) {
		dispatch(requestEditCard({ cardId: id, token, payload }));
		setTimeout(() => {
			history.replace("/");
		}, 3000);
	}

	return (
		<>
			<TopNavbar title="Editar Articulo" />
			<div className="edit">
				{error && (
					<Alert error showButtonClose>
						No se pudo actulizar, Intentelo mas tarde
					</Alert>
				)}
				{success && (
					<Alert success showButtonClose>
						Se actualizo su tarjeta correctamente
					</Alert>
				)}
				{state && <CardForm sendForm={updateCard} loading={loading} data={state} />}
			</div>
		</>
	);
};

export default EditCard;
