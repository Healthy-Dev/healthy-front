import React from "react";
import Image from "../CardImage";
import Content from "../CardContent";
import "./index.scss";

const Card = ({ data }) => (
	<div className="card">
		<Image photo={data.photo} title={data.title} />
		<Content title={data.title} description={data.description} />
	</div>
);

export default Card;
