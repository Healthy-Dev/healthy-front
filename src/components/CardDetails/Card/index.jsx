import React, { useState } from "react";
import "./index.scss";

import Image from "../CardImage";
import Content from "../CardContent";
import ModalConfirmDelete from "../ModalConfirmDelete";
import { changeState } from  "libs/changeState";

const Card = ({ data }) => {
	const [showModal, setShowModal] = useState(false);
	const [modalConfirm, setModalConfirm] = useState(false);

	return (
		<div className="card__detail">
			{modalConfirm && <ModalConfirmDelete toggleModalConfirm={() => changeState(setModalConfirm)} />}
			<Image photo={data.photo} title={data.title} />
			<Content
				title={data.title}
				description={data.description}
				showModal={showModal}
				toggleModalOptions={() => changeState(setShowModal)}
				toggleModalConfirm={() => changeState(setModalConfirm)}
			/>
		</div>
	);
};

export default Card;
