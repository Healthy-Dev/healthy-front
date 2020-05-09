import React from "react";
import "./index.scss";

import fakeData from '../data';

const CardImage = () => {
	return (
		<div className="CardImage">
			<img src={fakeData.image} alt={fakeData.imageAlt} />
		</div>
	);
}

export default CardImage;
