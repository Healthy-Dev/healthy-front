import React, { useContext } from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";

import { ReactComponent as IconBack } from "assets/icons/arrow-left.svg";
import CountLikes from "../LikesCount";

import { ILikeContext } from "state/cardsILike";

const CardImage = ({
	id,
	photo,
	title,
	likesCount,
	isILiked,
	iLiked,
	disLiked,
	category,
}) => {
	const history = useHistory();
	const { deleteCardILike, setCardILike } = useContext(ILikeContext);

	return (
		<section className="card__header">
			<figure className="card__header--img">
				<img src={photo} alt={title} />
			</figure>
			<div className="card__header--more">
				<button className="back" onClick={() => history.goBack()}>
					<IconBack />
				</button>
				<CountLikes
					likesCount={likesCount}
					isILiked={isILiked}
					iLiked={iLiked}
					disLiked={disLiked}
					deleteCardILike={() => deleteCardILike(id)}
					setCardILike={() => setCardILike(id)}
				/>
			</div>
			<section className="card__header--title">
				<span className="card__btn">{category}</span>
				<h1 className="card__title">{title}</h1>
			</section>
		</section>
	);
};
export default CardImage;
