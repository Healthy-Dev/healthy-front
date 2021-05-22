import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";
import { ReactComponent as BackIcon } from "assets/icons/arrow-left.svg";

const InputSearch = ({  query, handleSetQuery, handleGetCards }) => {
	
	const [inputFocus, setInputFocus] = useState(false);
	const inputRef = useRef(undefined);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	function handleKeyDown({ keyCode }) {
		if ((keyCode === 13) && query.trim()) {
			setInputFocus(false);
			handleGetCards();
		}
	}

	function handleChange(e) {
		const query = e.target.value;
		setInputFocus(true);
		handleSetQuery(query);
	}

	function onBlurInput() {
		inputRef.current.blur();
		setInputFocus(false);
		handleSetQuery("");
	}

	function cleanInput() {
		handleSetQuery("");
		inputRef.current.focus();
		setInputFocus(true);
	}

	return (
		<div className="search__input">
			<span className="search__input--icon">
				{inputFocus ? (
					<BackIcon className="back" onClick={onBlurInput} />
				) : (
					<SearchIcon />
				)}
			</span>
			<input
				id="input-search"
				type="text"
				value={query}
				placeholder="¿Qué estás buscando?"
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				ref={inputRef}
			/>
			{query.length > 0 && (
				<span className="search__input--icon" onClick={cleanInput}>
					<CloseIcon className="close" />
				</span>
			)}
		</div>
	);
};

InputSearch.propTypes = {
	query: PropTypes.string,
	handleSetQuery: PropTypes.func,
	handleGetCards: PropTypes.func,
}; 

export default InputSearch;
