import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

import NavBar from "components/_shared/NavBar";
import NotResults from "components/Search/NotResults";
import Tags from "components/Search/Tags";
import InputSearch from "components/Search/InputSeach";
import Loading from "components/_shared/Loading";

import { requestSearchCards } from "state/cards/actions";
import { SearchCardsSelector } from "state/cards/selectors";
import Card from "components/_shared/Card";

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

	const dispatch = useDispatch();
	const { data, loading } = useSelector((state) => SearchCardsSelector(state));

	function getCards() {
		dispatch(requestSearchCards(locationQuery));
	}

	useEffect(() => {
		if (history.location.search.includes(`?query=`) && locationQuery) {
			if (!data) getCards();
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
				{locationQuery && (
					<h2 className="search__title">
						Busqueda:
						<span> {locationQuery}</span>
					</h2>
				)}
				<div className="search__cards">
					{data && data.length === 0 ? (
						<NotResults />
					) : (
						data &&
						data.map(({ photo, title, id }) => (
							<Card img={photo} title={title} key={id} id={id} />
						))
					)}
				</div>
			</div>
			<NavBar />
		</>
	);
};

export default Search;
