import React, { useCallback, useState } from "react";
import "./index.scss";
import { ReactComponent as IconLike } from "assets/icons/likes-heart.svg";

const CountLikes = ({ likesCount }) => {
	const [like, setLike] = useState(false);

	// TODO functionality likes
	const liked = useCallback(() => {
		setLike((like) => !like);
	}, []);

	return (
		<div className="like">
			<IconLike className={`like--icon ${like && "liked"}`} onClick={liked} />
			<span className="like--count">{!like ? likesCount : ++likesCount}</span>
		</div>
	);
};

export default CountLikes;
