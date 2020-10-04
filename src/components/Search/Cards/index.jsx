import React from "react";
import Card from "components/_shared/Card";
import NotResults from "../NotResults";

const CardsSearch = ({ data, query }) => {
	return (
		<>
			<h2 className="search__title">
				Buscar: <span>{query}</span>
			</h2>
			<div className="search__cards">
				{data.length === 0 ? (
					<NotResults />
				) : (
					data.map(({ photo, title, id }) => (
						<Card img={photo} title={title} key={id} id={id} />
					))
				)}
			</div>
		</>
	);
};

export default CardsSearch;
