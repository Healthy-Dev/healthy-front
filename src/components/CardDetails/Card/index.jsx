import React from "react";
//Import Components
import Image from "../CardImage";
import Content from "../CardContent";
//Import style
import "./index.scss";
//Import Data
import { fakeData } from "../data";

const Card = ({data}) => (
	<section>
		{
			data &&
			<article className="Card">
				<Image image={data['0'].photo} imageAlt={fakeData.imageAlt} />
				<Content content={data['0'].title} />
			</article>
		}
	</section>
);

export default Card;
