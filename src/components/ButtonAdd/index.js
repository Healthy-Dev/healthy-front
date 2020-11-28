import React, { useContext } from "react";
import { ReactComponent as IconAdd } from "assets/icons/plus.svg";
import "./index.scss";
import { ContextModal } from "hooks/useModal";
import useAuth from "hooks/useAuth";

const ButtonAdd = () => {
	const { showComponent, showModal } = useContext(ContextModal);
	const { isAuth } = useAuth();

	function showModalCreateCard() {
		showComponent("add-card");
		showModal();
	}

	return (
		<>
			{isAuth && (
				<button className="btn-create" onClick={showModalCreateCard}>
					<IconAdd />
				</button>
			)}
		</>
	);
};

export default ButtonAdd;
