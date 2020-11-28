import React from "react";
import "./index.scss";
import { ReactComponent as IconLike } from "assets/icons/heart.svg";
import { useAnimation } from "./useAnimation";
import useAuth from "hooks/useAuth";

const CountLikes = ({
	likesCount,
	isILiked,
	iLiked,
	disLiked,
	deleteCardILike,
	setCardILike,
}) => {
	const { animate, ref } = useAnimation();
	const { isAuth } = useAuth();

	function clickLike() {
		if (isILiked) {
			disLiked();
			deleteCardILike();
		} else {
			iLiked();
			setCardILike();
			animate();
		}
	}

	return (
		<div className="like">
			<span className="like__count">{likesCount}</span>
			<button className="like__btn" onClick={clickLike} ref={ref} disabled={!isAuth}>
				<IconLike className={`like--icon ${isILiked && "liked"}`} />
			</button>
		</div>
	);
};

export default CountLikes;
