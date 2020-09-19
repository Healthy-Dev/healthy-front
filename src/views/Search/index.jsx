import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

import NavBar from "components/Home/NavBar";
import NotResults from "components/Search/NotResults";
import Tags from "components/Search/Tags";
import InputSearch from "components/Search/InputSeach";
import Loading from "components/_shared/Loading";

import { requestSearch } from "state/search/actions";
import { SearchSelector } from "state/search/selectors";

// Reemplazar por los datos del back
const categories = [
	"Espaciodetrabajo",
	"Deportes",
	"SaludMental",
	"Recetas",
	"Alimentación",
	"Otros",
];

const Search = ({ history }) => {
	let locationQuery = history.location.search.replace("?query=", "");
	
	const d = useDispatch();
	const { data, loading } = useSelector((state) => SearchSelector(state));
	
	function getCards() {
		d(requestSearch(locationQuery));
	}

	useEffect(() => {
		if (history.location.search.includes(`?query=`) && locationQuery) {
			getCards();
		}
	}, []); //eslint-disable-line
	
	// Filtrar por categoria
	function filterByCategories(category) {
		console.log("Filtrar datos por: ", category);
	}

	return (
		<>
			<div className="search">
				<InputSearch getCards={getCards} history={history} />
				{/* Agregar funcionalidad de filtro */}
				<Tags filterByCategories={filterByCategories} categories={categories} />
				
				{loading && <Loading />}
				<div className="cards">
					{data && data.length === 0 
					? <NotResults />
					: data && data.map((item) => (
						// Traer targeta del su respectivo componente
							<div key={item.id} className="cards__card" onClick={() => history.push(`/details/${item.id}`)}>
								<img className="cards__card--img" src={item.photo} alt={item.title} />
								<h2 className="cards__card--title">{item.title}</h2>
							</div>
						))}
				</div>
			</div>
			<NavBar />
		</>
	);
};

export default Search;
