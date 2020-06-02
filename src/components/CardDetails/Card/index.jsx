import React from "react";
//Import Components
import Image from "../CardImage";
import Content from "../CardContent";
//Import style
import "./index.scss";
//Import Data
import { fakeData } from "../data";

const Card = ({data, loading}) => (
	<section>
		{loading && <p>Loading...</p>}
		{
			data &&
			<article className="Card">
				<Image image={data.img} imageAlt={fakeData.imageAlt} />
				<Content content={data.content} />
			</article>
		}
	</section>
);

export default Card;
