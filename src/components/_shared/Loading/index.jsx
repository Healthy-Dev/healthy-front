import React from "react";
import "./index.scss";

const Loading = () => {
	return (
		<div className="loading">
			<div className="loading__loader">
				<div className="loading__loader--line"></div>
				<div className="loading__loader--line"></div>
				<div className="loading__loader--line"></div>
			</div>
			<h2 className="loading__title">
				<span>HEALTHY</span> DEV
			</h2>
		</div>
	);
};

export default Loading;
