import React from "react";
import PropTypes from "prop-types";

const ModalOptions = ({ optionsModal, handleClick }) => (
	<ul className="more__modal">
		{optionsModal.map((option, index) => (
			<li key={index} onClick={() => handleClick(option.fn)}>
				{option.title}
			</li>
		))}
	</ul>
);

ModalOptions.propTypes = {
	optionsModal: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			fn: PropTypes.func,
		}),
	),
	handleClick: PropTypes.func,
};

export default ModalOptions;
