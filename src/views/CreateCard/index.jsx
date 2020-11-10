import React, { useContext } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestCreateCard } from "state/cards/actions";
import { CreateCardSelector } from "state/cards/selectors";
// Components
import CardForm from "components/CardForm";
import TopNavbar from "components/_shared/TopNavbar";

import useAuth from "hooks/useAuth";
import { ContextModal } from "hooks/useModal";

const CreateCardView = () => {
	const { hiddenModal } = useContext(ContextModal);
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => CreateCardSelector(state));
	const { token } = useAuth();

	function createCard(data) {
		dispatch(requestCreateCard({ token, data }));
		setTimeout(() => hiddenModal(), 2000);
	}

	return (
		<div className="create-card-container">
			<TopNavbar title="Agregar Articulo" />
			<CardForm sendForm={createCard} loading={loading} data={""} />
		</div>
	);
};

export default CreateCardView;
