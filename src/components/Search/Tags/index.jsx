import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Tags = ({ filterByCategories, categories }) => {
	return (
		<div className="search__tags">
			{categories.map((category, index) => (
				<button
					className="search__tags--tag"
					onClick={() => filterByCategories(category)}
					key={index}
				>
					{ category }
				</button>
			))}
		</div>
	);
};

Tags.prototype = {
  filterByCategories: PropTypes.func,
  categories: PropTypes.array
}

export default Tags;