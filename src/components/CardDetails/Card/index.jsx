import React from "react";
//Import Components
import Image from "../CardImage";
import Content from "../CardContent";
//Import style
import "./index.scss";
//Import Data
import { fakeData } from "../data";

const Card = () => (
	<section>
		<article className="Card">
			<Image image={fakeData.image} imageAlt={fakeData.imageAlt} />
			<Content content={fakeData.content} />
		</article>
	</section>
);

export default Card;
