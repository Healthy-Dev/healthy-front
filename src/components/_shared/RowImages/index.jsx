import React from "react";
import "./index.scss";
import images from "../../../assets/Images/_images.js";

function generateRandom(min, max) {
	return Math.random() * (max - min) + min;
}

function stylesImg() {
	return {
		minWidth: `${generateRandom(200, 250)}px`,
		minHeight: `${generateRandom(120, 150)}px`,
		margin: `${generateRandom(1, 1.5)}rem`,
	};
}

const RowImages = () => (
	<div className="onboarding__images">
		{images.map((image, index) => (
			<section className="onboarding__images--row">
				{image.map((img) => (
					<div key={img.id} style={stylesImg()}>
						<img src={img.image} alt={img.title} />
					</div>
				))}
			</section>
		))}
	</div>
);

export default RowImages;
