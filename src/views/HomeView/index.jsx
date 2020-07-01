import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestCreateCard } from "state/createCard/actions";
import { CreateCardSelector } from "state/createCard/selectors";
// Components
import Card from "components/Home/Card";
import NavBar from "components/Home/NavBar";
import Button from "components/Home/Button";
// Styles
import "./index.scss";

const HomeView = () => {
	const history = useHistory();
	const d = useDispatch();
	const { data, loading, error } = useSelector((state) => CreateCardSelector(state));

	useEffect(() => {
		d(requestCreateCard());
	}, [d]);

	useEffect(() => {
		if (error) console.log("ups la cagamos con algo");
		if (loading) console.log("estamos esperando que termine la request :D");
		if (!loading) console.log("ya no estamos esperando (?)");
		if (data) {
			console.log("desde backed me llego esto:", data);
		}
	}, [data, loading, error]);

	return (
		<div className="create-card-container">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Button />
			<NavBar />
		</div>
	);
};

export default HomeView;
