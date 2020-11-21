import React, { useContext } from "react";

import { useDispatch, useSelector } from "react-redux";
import { requestEditCard } from "state/cards/actions";
import { EditCardSelector } from "state/cards/selectors";

import TopNavbar from "components/_shared/TopNavbar";
import CardForm from "components/CardForm/";
import useAuth from "hooks/useAuth";
import { ContextModal } from "hooks/useModal";

const EditCard = () => {
	const { id, extra: state, hiddenModal } = useContext(ContextModal);
	const { token } = useAuth();
	const dispatch = useDispatch();

	const { loading } = useSelector((state) => EditCardSelector(state));

	function updateCard(payload) {
		dispatch(requestEditCard({ cardId: id, token, payload }));
		setTimeout(() => hiddenModal(), 2000);
	}

	return (
		<>
			<TopNavbar title="Editar Articulo" />
			<div className="edit">
				{state && <CardForm sendForm={updateCard} loading={loading} data={state} />}
			</div>
		</>
	);
};

export default EditCard;
