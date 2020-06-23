import React from "react";
import "./index.scss";

const CardImage = ({ image, imageAlt }) =>(
		<figure className="CardImage">
			<img src={image} alt={imageAlt} />
		</figure>
	);

export default CardImage;
