import React, { useContext } from "react";
import { ReactComponent as IconAdd } from "assets/icons/plus.svg";
import "./index.scss";
import { ContextModal } from "hooks/useModal";

const ButtonAdd = () => {
	const { showComponent, showModal } = useContext(ContextModal);

	function showModalCreateCard() {
		showComponent("add-card");
		showModal();
	}

	return (
		<>
			<button className="btn-create" onClick={showModalCreateCard}>
				<IconAdd />
			</button>
		</>
	);
};

export default ButtonAdd;
