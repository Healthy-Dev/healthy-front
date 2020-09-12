import React from "react";
import "./index.scss";
import {ReactComponent as IconLike} from "assets/icons/likes-heart.svg";
import {ReactComponent as IconBack} from "assets/icons/arrow-left.svg";
import { useHistory } from "react-router-dom";

const CardImage = ({ photo, title }) => {
	const history = useHistory()
	return (
		<section className="card__header">
			<figure className="card__header--img">
				<img src={photo} alt={title} />
			</figure>
			<div className="card__header--more">
				<button className="back" onClick={() => history.goBack()}><IconBack /></button>
				<div className="like">
					<IconLike className="like--icon" />
					<span className="like--count">10</span>
				</div>
			</div>
		</section>
	);
}
export default CardImage;
