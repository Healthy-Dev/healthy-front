import React from "react";
import "./index.scss";
import Card from "components/_shared/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrousel = ({ data }) => {
	return (
		<div className="carrousel">
			<div className="carrousel__cards">
				{data.map(({ photo, title, id }) => (
					<Card img={photo} title={title} key={id} id={id} />
				))}
			</div>
		</div>
	);
};

export default Carrousel;
