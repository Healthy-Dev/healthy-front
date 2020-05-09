import React from "react";
import "./index.scss";
import fakeData from '../data';

const CardContent = () => {
	return (
		<div className="CardContext">
			<p>
				{fakeData.content}
			</p>
		</div>
	);
}

export default CardContent;
