import React, { useCallback, useState } from "react";
import "./index.scss";
import { ReactComponent as IconLike } from "assets/icons/likes-heart.svg";
import { useDispatch, useSelector } from "react-redux";
import { LikedCardsSelector } from "state/cards/selectors"
import { requestLikedCards } from "state/cards/actions"
import useAuth from "hooks/useAuth"

const CountLikes = ({ likesCount, id }) => {
	const dispatch = useDispatch();
	const { token } = useAuth();
	const { data, loading, error } = useSelector((state) => LikedCardsSelector(state));
	const [like, setLike] = useState(false);

	// TODO functionality likes
	const liked = useCallback((idCard) => {
		dispatch(requestLikedCards({ idCard: id, token }))

		setLike((like) => !like);
	}, [like]);

	return (
		<div className="like">
			<IconLike className={`like--icon ${like && "liked"}`} onClick={liked} />
			<span className="like--count">{!like ? likesCount : ++likesCount}</span>
		</div>
	);
};

export default CountLikes;
