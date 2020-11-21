import React from "react";
import "./index.scss";

export default function Loader({ className, center }) {
	return (
		<div className={`loader-icon ${className} ${center && "center"}`}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
