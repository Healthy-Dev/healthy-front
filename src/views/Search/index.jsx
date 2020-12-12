import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

import useLocalStorage from "hooks/useLocalStorage";

import Layout from "components/_shared/Layout";
import Tags from "components/Search/Tags";
import InputSearch from "components/Search/InputSeach";
import ListCards from "components/_shared/ListCards";
import NotResults from "components/Search/NotResults";
import Loader from "components/_shared/Loader";

import { requestSearchCards, requestCardsByCategory } from "state/cards/actions";
import { SearchCardsSelector, filterCardsByCategory } from "state/cards/selectors";

const Search = ({ history }) => {
	const dispatch = useDispatch();

	let locationQuery = history.location.search.replace("?query=", "");
	const [filterOrSearch, setFilterOrSearch] = useLocalStorage("filterOrSearch", "");
	const [cards, setCards] = useState([]);

	const { data: searchData, loading: searchLoading } = useSelector((state) =>
		SearchCardsSelector(state),
	);

	const {
		data: filterByCategoryData,
		loading: filterByCategoryLoading,
	} = useSelector((state) => filterCardsByCategory(state));

	const searchCards = React.useCallback(() => {
		dispatch(requestSearchCards(locationQuery));

		setFilterOrSearch({ name: "search", value: locationQuery });
	}, [locationQuery, dispatch, setFilterOrSearch]);

	function filterByCategories(categoryId, categoryName) {
		setFilterOrSearch({ name: "filter", value: categoryName });

		if (filterOrSearch.value !== categoryName)
			dispatch(requestCardsByCategory(categoryId));
	}

	useEffect(() => {
		if (history.location.search.includes(`?query=`) && locationQuery) {
			if (!searchData) searchCards();
		}
	}, []); //eslint-disable-line

	useEffect(() => {
		if (filterOrSearch.name === "search") setCards(searchData);
		if (filterOrSearch.name === "filter") setCards(filterByCategoryData);
	}, [searchData, filterByCategoryData]); //eslint-disable-line

	return (
		<Layout title="Buscar">
			<div className="search">
				<InputSearch getCards={searchCards} history={history} />
				<Tags filterByCategories={filterByCategories} />

				<div className="search__content">
					<h2 className="search__title">
						Buscar: <span>{filterOrSearch.value}</span>
					</h2>

					{cards && <ListCards cards={cards} />}

					{(searchLoading || filterByCategoryLoading) && <Loader center />}

					{cards?.length === 0 && <NotResults />}
				</div>
			</div>
		</Layout>
	);
};

export default Search;
