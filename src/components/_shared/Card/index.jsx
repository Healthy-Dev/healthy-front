import React from "react";
import "./index.scss";
import { ContextModal } from "hooks/useModal";
import { useContext } from "react";

const Card = ({ img, title, id }) => {
	const { showModal, setID, showComponent } = useContext(ContextModal);

	function handleClick() {
		showModal();
		setID(id);
		showComponent("card");
		// history.push(`/details/${id}`);
		// console.log("boo");
	}
	return (
		<div className="card" onClick={handleClick}>
			<img src={img} alt="card" />
			<div>
				<h2>{title}</h2>
			</div>
		</div>
	);
};

export default Card;
