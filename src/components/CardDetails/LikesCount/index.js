import React, { useState } from "react";
import "./index.scss";
import { ReactComponent as IconLike } from "assets/icons/likes-heart.svg";
import { useDispatch } from "react-redux";
import {
	requestLikedCards,
	requestDislikedCards,
	requestGetCard,
} from "state/cards/actions";
import useAuth from "hooks/useAuth";
import { useEffect } from "react";

const CountLikes = ({ likesCount, id, isLikedByMe }) => {
	const [isLiked, setLiked] = useState(false);
	const dispatch = useDispatch();
	const { token } = useAuth();

	const iLiked = () => {
		dispatch(requestLikedCards({ idCard: id, token }));
		dispatch(requestGetCard({ cardId: id }));
	};

	const disLiked = () => {
		dispatch(requestDislikedCards({ idCard: id, token }));
		dispatch(requestGetCard({ cardId: id }));
	};

	useEffect(() => {
		setLiked(() => isLikedByMe());
	}, [isLikedByMe]);

	return (
		<div className="like">
			<IconLike
				className={`like--icon ${isLiked && "liked"}`}
				onClick={isLiked ? disLiked : iLiked}
			/>
			<span className="like--count">{likesCount}</span>
		</div>
	);
};

export default CountLikes;
