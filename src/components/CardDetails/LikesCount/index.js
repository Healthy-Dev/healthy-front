import React from "react";
import "./index.scss";
import { ReactComponent as IconLike } from "assets/icons/heart.svg";
import { useAnimation } from "./useAnimation";

const CountLikes = ({ likesCount, isILiked, iLiked, disLiked }) => {
	const { animate, ref } = useAnimation();

	function clickLike() {
		animate();
		if (isILiked) {
			disLiked();
		} else {
			iLiked();
		}
	}

	return (
		<div className="like">
			<span className="like--count">{likesCount}</span>
			<div className="btn-like" onClick={clickLike} ref={ref}>
				<IconLike className={`like--icon ${isILiked && "liked"}`} />
			</div>
		</div>
	);
};

export default CountLikes;
