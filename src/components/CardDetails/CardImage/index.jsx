import React from "react";
import "./index.scss";
import { ReactComponent as IconBack } from "assets/icons/arrow-left.svg";
import { useHistory } from "react-router-dom";

import CountLikes from "../LikesCount";

const CardImage = ({
	photo,
	title,
	likesCount,
	isILiked,
	iLiked,
	disLiked,
	category,
}) => {
	const history = useHistory();
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
				/>
			</div>
			<section className="card__header--title">
				<button className="card__btn">{category}</button>
				<h1 className="card__title">{title}</h1>
			</section>
		</section>
	);
};
export default CardImage;
