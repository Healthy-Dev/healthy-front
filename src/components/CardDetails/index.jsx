import React, { useState } from "react";
import "./index.scss";

import Image from "./CardImage";
import Content from "./CardContent";
import ModalConfirmDelete from "./ModalConfirmDelete";
import { changeState } from "libs/changeState";

const Card = ({ data, isYourCard, deleteCard, isLikedByMe }) => {
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
			<Image
				photo={data.photo}
				title={data.title}
				likesCount={data.likesCount}
				id={data.id}
				isLikedByMe={isLikedByMe}
			/>
			<Content
				photo={data.photo}
				externalUrl={data.externalUrl}
				id={data.id}
				creatorInfo={data.creator}
				description={data.description}
				category={data.category}
				createdAt={data.updatedAt}
				title={data.title}
				toggleModalConfirm={() => changeState(setModalConfirm)}
				isYourCard={isYourCard}
			/>
		</div>
	);
};

export default Card;
