import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Tags = ({ filterByCategories, categories, categoriesLoading }) => {
	return (
		<div className="search__tags">
			{categoriesLoading ? (
				<button className="search__tags--tag"></button>
			) : (
				categories.map((category, index) => (
					<button
						className="search__tags--tag"
						onClick={() => filterByCategories(category.id, category.name)}
						key={index}
					>
						{category.name}
					</button>
				))
			)}
		</div>
	);
};

Tags.prototype = {
	filterByCategories: PropTypes.func,
	categories: PropTypes.array,
	categoriesLoading: PropTypes.bool,
};

export default Tags;
