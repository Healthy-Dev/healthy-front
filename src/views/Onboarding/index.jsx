import React from "react";
import "./index.scss";
import { ReactComponent as LogoIcon } from "assets/icons/logo.svg";
import Button from "components/_shared/Button";

function generateRandom(min, max) {
	return Math.random() * (max - min) + min;
}

function stylesImg() {
	return {
		minWidth: `${generateRandom(120, 250)}px`,
		minHeight: `${generateRandom(120, 150)}px`,
		margin: `${generateRandom(0.8, 1.2)}rem`,
	};
}

const RowImages = ({ images }) => (
	<section className="onboarding__images--row">
		{images.map((img) => (
			<div key={img.id} style={stylesImg()}>
				<img src={img.image} alt={img.title} />
			</div>
		))}
	</section>
);

const Onboarding = ({ history }) => {
	function randomImage() {
		return `https://picsum.photos/300/200?random=${Math.floor(generateRandom(0, 25))}`;
	}

	const images = [
		{ id: 0, image: randomImage(), title: "random" },
		{ id: 1, image: randomImage(), title: "random" },
		{ id: 2, image: randomImage(), title: "random" },
		{ id: 3, image: randomImage(), title: "random" },
		{ id: 4, image: randomImage(), title: "random" },
	];

	return (
		<div className="onboarding">
			<div className="onboarding__images">
				<RowImages images={images} />
				<RowImages images={images} />
				<RowImages images={images} />
				<RowImages images={images} />
			</div>
			<div className="onboarding__content">
				<p className="onboarding__content--text">
					Compartí, busca, <br />
					aprende y más...
				</p>
				<LogoIcon className="onboarding__content--logo" />
				<Button
					className="onboarding__content--button"
					onClick={() => history.push("/login")}
				>
					Comenzar
				</Button>
			</div>
		</div>
	);
};

export default Onboarding;
