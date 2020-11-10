import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import useLocalStorage from "hooks/useLocalStorage";

import Layout from "components/_shared/Layout";
import Tags from "components/Search/Tags";
import InputSearch from "components/Search/InputSeach";
import Loading from "components/_shared/Loading";
import CardsSearch from "components/Search/Cards";

import { requestSearchCards, requestCardsByCategory } from "state/cards/actions";
import { SearchCardsSelector, filterCardsByCategory } from "state/cards/selectors";

const Search = ({ history }) => {
	let locationQuery = history.location.search.replace("?query=", "");
	const [filterOrSearch, setFilterOrSearch] = useLocalStorage("filterOrSearch", "");

	const dispatch = useDispatch();
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

	return (
		<Layout title="Buscar">
			<div className="search">
				<InputSearch getCards={searchCards} history={history} />
				<Tags filterByCategories={filterByCategories} />

				{(searchLoading || filterByCategoryLoading) && <Loading />}

				{filterOrSearch.name === "filter" && filterByCategoryData && (
					<CardsSearch data={filterByCategoryData} query={filterOrSearch.value} />
				)}

				{filterOrSearch.name === "search" && searchData && (
					<CardsSearch data={searchData} query={filterOrSearch.value} />
				)}
			</div>
		</Layout>
	);
};

export default Search;
