import React, { useState } from "react";
import "./index.scss";

import Image from "../CardImage";
import Content from "../CardContent";
import ModalConfirmDelete from "../ModalConfirmDelete";
import { changeState } from  "libs/changeState";

const Card = ({ data }) => {
	const [modalConfirm, setModalConfirm] = useState(false);

	return (
		<div className="card__detail">
			{modalConfirm && <ModalConfirmDelete toggleModalConfirm={() => changeState(setModalConfirm)} id={data.id} />}
			<Image photo={data.photo} title={data.title} />
			<Content
				title={data.title}
				id={data.id}
				description={data.description}
				toggleModalConfirm={() => changeState(setModalConfirm)}
			/>
		</div>
	);
};

export default Card;
