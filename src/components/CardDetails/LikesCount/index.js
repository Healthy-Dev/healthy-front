import React from "react";
import "./index.scss";
import { ReactComponent as IconLike } from "assets/icons/likes-heart.svg";

const CountLikes = ({ likesCount, isILiked, iLiked, disLiked }) => (
	<div className="like">
		<IconLike
			className={`like--icon ${isILiked && "liked"}`}
			onClick={isILiked ? disLiked : iLiked}
		/>
		<span className="like--count">{likesCount}</span>
	</div>
);

export default CountLikes;
