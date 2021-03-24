import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";
import { ReactComponent as BackIcon } from "assets/icons/arrow-left.svg";

const InputSearch = ({ getCards, history }) => {
	const [query, setQuery] = useState("");
	const [inputFocus, setInputFocus] = useState(false);
	const inputRef = useRef(undefined);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	function getCardsEnter(e) {
		if (!query) return;
		if (e.keyCode === 13) {
			getCards();
			setInputFocus(false);
		}
	}

	function handleChange(e) {
		let query = e.target.value;
		setInputFocus(true);
		history.replace(`?query=${query}`);
		setQuery(query);
	}

	function onBlurInput() {
		inputRef.current.blur();
		history.push("/search");
		setInputFocus(false);
		setQuery("");
	}

	function cleanInput() {
		setQuery("");
		inputRef.current.focus();
		history.push(`?query=`);
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
				onKeyDown={getCardsEnter}
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
	getCards: PropTypes.func,
	history: PropTypes.any,
};

export default InputSearch;
