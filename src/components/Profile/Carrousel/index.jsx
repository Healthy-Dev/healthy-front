import React from "react";
import "./index.scss";
import Card from "components/Profile/Card";

const Carrousel = ({ data }) => {
	return (
		<div className="carrousel">
			<h4>Categoria</h4>
			<div className="carrousel__scroll">
				{data.map(({ photo, title, id }) => (
					<Card img={photo} title={title} key={id} id={id} />
				))}
			</div>
		</div>
	);
};

export default Carrousel;
