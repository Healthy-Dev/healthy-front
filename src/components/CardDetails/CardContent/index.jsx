import React from "react";
import "./index.scss";

const CardContent = ({ title, content }) => (
	<div className="CardContent">
		<h4>{title}</h4>
		<p>{content}</p>
	</div>
);

export default CardContent;
