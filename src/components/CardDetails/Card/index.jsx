import React from "react";
//Import Components
import Image from "../CardImage";
import Content from "../CardContent";
//Import style
import "./index.scss";
//Import Data

const Card = ({ data }) => (
	<section>
		{data && (
			<article className="Card">
				<Image image={data.photo} imageAlt={data.title} />
				<Content content={data.description} title={data.title} />
			</article>
		)}
	</section>
);

export default Card;
