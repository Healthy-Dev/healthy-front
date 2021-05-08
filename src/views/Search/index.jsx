import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

import Layout from "components/_shared/Layout";
import Tags from "components/Search/Tags";
import InputSearch from "components/Search/InputSeach";
import CardsList from "components/_shared/CardsList";
import NotResults from "components/Search/NotResults";
import Loader from "components/_shared/Loader";

import { requestSearchCards, requestCardsByCategory, requestGetCards } from "state/cards/actions";
import { SearchCardsSelector, filterCardsByCategory, GetCardsSelector } from "state/cards/selectors";
import { UserSelector } from "state/user/selectors";

const typesQuery = {
  SEARCH: "search",
  FILTERBYCATEGORY: "filter",
}

const validsQueryString = {
  SEARCH: "?query=",
  FILTERBYCATEGORY: "?categoryId=",
}

const path = "/search";

const Search = ({ history }) => {
  const dispatch = useDispatch();

  let locationQueryType = history.location.search.includes(validsQueryString.SEARCH) ?
    typesQuery.SEARCH :
    history.location.search.includes(validsQueryString.FILTERBYCATEGORY) ?
      typesQuery.FILTERBYCATEGORY :
      "";
  let locationQueryValue = history.location.search.replace(validsQueryString.SEARCH, "")
    .replace(validsQueryString.FILTERBYCATEGORY, "");

  const [filterOrSearch, setFilterOrSearch] = useState(null);
  const [cards, setCards] = useState(null);
  const [categorySelectedId, setCategorySelectedId] = useState(null);
  const [query, setQuery] = useState("");

  const { data } = useSelector((state) => GetCardsSelector(state));
  const { data: userData } = useSelector((state) => UserSelector(state));
  const { data: searchData, loading: searchLoading } = useSelector((state) =>
    SearchCardsSelector(state),
  );

  const {
    data: filterByCategoryData,
    loading: filterByCategoryLoading,
  } = useSelector((state) => filterCardsByCategory(state));

  function handleSetQuery(query) {
    setQuery(query);
  }

  function handleFilterByCategory(categoryId) {
    if (filterOrSearch && ((filterOrSearch.type === typesQuery.FILTERBYCATEGORY) && (parseInt(filterOrSearch.value, 10) === categoryId)))
      return;
    history.push(`${path}${validsQueryString.FILTERBYCATEGORY}${categoryId}`)
  }

  function handleGetCards() {
    if (filterOrSearch && ((filterOrSearch.type === typesQuery.SEARCH) && (filterOrSearch.value === query)))
      return;
    history.push(`${path}${validsQueryString.SEARCH}${query}`);
  }

  useEffect(() => {
    function searchCards(query) {
      if (!query) return;
      dispatch(requestSearchCards(query));
      setCategorySelectedId(null);
      setFilterOrSearch({ type: typesQuery.SEARCH, value: query });
    }
    function filterByCategory(id) {
      setFilterOrSearch({ type: typesQuery.FILTERBYCATEGORY, value: id });
      setQuery("");
      dispatch(requestCardsByCategory(parseInt(id, 10)));
    }
    if (!locationQueryType || !locationQueryValue) {
      setQuery("");
      setCategorySelectedId(null)
      setCards(null);
      return;
    }

    if (locationQueryType === typesQuery.SEARCH) {
      setQuery(locationQueryValue);
      searchCards(locationQueryValue);
    }

    if (locationQueryType === typesQuery.FILTERBYCATEGORY) {
      setCategorySelectedId(parseInt(locationQueryValue, 10));
      filterByCategory(locationQueryValue);
    }
  }, [locationQueryType, locationQueryValue, dispatch]);

  useEffect(() => {
    if (!data) dispatch(requestGetCards());

    switch (filterOrSearch?.type) {
      case typesQuery.SEARCH:
        setCards(searchData)
        break;
      case typesQuery.FILTERBYCATEGORY:
        setCards(filterByCategoryData)
        break;
      default:
        setCards(data)
        break
    }
  }, [searchData, filterByCategoryData, data]); //eslint-disable-line

  return (
    <Layout>
      <div className="search">
        <InputSearch handleGetCards={handleGetCards} query={query} handleSetQuery={handleSetQuery} />
        <Tags filterByCategories={handleFilterByCategory} categorySelectedId={categorySelectedId} />
        <div className="search__content">
          {(searchLoading || filterByCategoryLoading) && <Loader center />}
          {!!cards && <>
            {(!!searchData || filterByCategoryData) && <h2 className="search__title">Resultados</h2>}
            <CardsList cards={cards} userId={userData?.user.id} />
          </>}

          {cards?.length === 0 && <NotResults />}
        </div>

      </div>
    </Layout>
  );
};

export default Search;
