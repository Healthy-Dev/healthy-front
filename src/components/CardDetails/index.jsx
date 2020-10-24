import React, { useState } from "react";
import "./index.scss";

import Image from "./CardImage";
import Content from "./CardContent";
import ModalConfirmDelete from "./ModalConfirmDelete";
import { changeState } from "libs/changeState";

const Card = ({
	data,
	isYourCard,
	deleteCard,
	isILiked,
	likesCount,
	iLiked,
	disLiked,
}) => {
	const [modalConfirm, setModalConfirm] = useState(false);

	return (
		<>
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
				id={data.id}
				category={data.category.name}
				likesCount={likesCount}
				isILiked={isILiked}
				iLiked={iLiked}
				disLiked={disLiked}
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
		</>
	);
};

export default Card;
