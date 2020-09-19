import React, { useState } from "react";
import "./index.scss";

import Image from "./CardImage";
import Content from "./CardContent";
import ModalConfirmDelete from "./ModalConfirmDelete";
import { changeState } from "libs/changeState";

const Card = ({ data, isYourCard, deleteCard }) => {
	const [modalConfirm, setModalConfirm] = useState(false);

	return (
		<div className="card__detail">
			{modalConfirm && (
				<ModalConfirmDelete
					toggleModalConfirm={() => changeState(setModalConfirm)}
					deleteCard={deleteCard}
					id={data.id}
				/>
			)}
			<Image photo={data.photo} title={data.title} />
			<Content
				photo={data.photo}
				externalUrl={data.externalUrl}
				id={data.id}
				creatorInfo={data.creator}
				description={data.description}
				createdAt={data.updatedAt}
				title={data.title}
				toggleModalConfirm={() => changeState(setModalConfirm)}
				isYourCard={isYourCard}
			/>
		</div>
	);
};

export default Card;
