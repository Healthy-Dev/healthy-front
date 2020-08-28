import React from "react";
import "./index.scss";
import {ReactComponent as IconLike} from "assets/icons/likes-heart.svg";
import {ReactComponent as IconBack} from "assets/icons/arrow-left.svg";

const CardImage = ({ /*photo,*/ title }) => (
	<section className="card__header">
		<figure className="card__header--img">
			<img src="https://www.clapps.com.ar/wp-content/uploads/2018/10/shutterstock_266758136.0.0.jpg" alt={title} />
		</figure>
		<div className="card__header--more">
			<button className="back"><IconBack /></button>
			<div className="like">
				<IconLike className="like--icon" />
				<span className="like--count">10</span>
			</div>
		</div>
	</section>
);

export default CardImage;
