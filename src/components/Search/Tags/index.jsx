import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { GetCardsCategories } from "state/cards/selectors";
import { requestGetCardsCategories } from "state/cards/actions";

const Tags = ({ filterByCategories }) => {
	const dispatch = useDispatch();
	const { data, loading } = useSelector((state) => GetCardsCategories(state));

	useEffect(() => {
		if (!data) dispatch(requestGetCardsCategories());
	}, [data, dispatch]);
	return (
		<div className="search__tags">
			{loading && <button className="search__tags--tag"></button>}
			{data &&
				data.map((category, index) => (
					<button
						className="search__tags--tag"
						onClick={() => filterByCategories(category.id, category.name)}
						key={index}
					>
						{category.name}
					</button>
				))}
		</div>
	);
};

Tags.prototype = {
	filterByCategories: PropTypes.func,
};

export default Tags;
