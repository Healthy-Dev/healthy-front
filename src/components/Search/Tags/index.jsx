import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { GetCardsCategories } from "state/cards/selectors";
import { requestGetCardsCategories } from "state/cards/actions";
const Tags = ({ filterByCategories, categorySelectedId }) => {
	const dispatch = useDispatch();
	// eslint-disable-next-line no-unused-vars
	const { data, loading } = useSelector((state) => GetCardsCategories(state));
	useEffect(() => {
		if (!data) dispatch(requestGetCardsCategories());
	}, [data, dispatch]);

	function selectCategory(categoryId) {
		filterByCategories(categoryId)
	}
	return (
		<div className="tags">
			{data?.map((category) => (
					<button
						className= {`tag${(categorySelectedId && category.id === categorySelectedId) ?" tag--selected":""}`}
						onClick={() => selectCategory(category.id)}
						key={category.id}
					>
						{category.name}
					</button>
			))}
		</div>
	);
};

Tags.prototype = {
	filterByCategories: PropTypes.func,
	categorySelectedId: PropTypes.number,
};

export default Tags;
