import React, { useCallback, useState } from "react";
import "./index.scss";

import Image from "./CardImage";
import Content from "./CardContent";
import ModalConfirmDelete from "./ModalConfirmDelete";

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

	const handleModalConfirm = useCallback(() => {
		setModalConfirm(state => !state)
	}, [])

	return (
		<>
			{modalConfirm && (
				<ModalConfirmDelete
					toggleModalConfirm={handleModalConfirm}
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
				toggleModalConfirm={handleModalConfirm}
				isYourCard={isYourCard}
			/>
		</>
	);
};

export default Card;
