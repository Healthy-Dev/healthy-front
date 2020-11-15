import React, { useEffect } from "react";
// Styles
import "./index.scss";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/_shared/Button";
import HealthyDev from "components/_shared/HealthyDev";
import LoginForm from "components/Login";

const Social = ({ history }) => {
	const { search } = useLocation();

	const dispatch = useDispatch();

	const isTokenFromEmail = search.includes("token");
	const token = search.replace("?token=", "");

	useEffect(() => {
		if (isTokenFromEmail) {
			//...
		}
		// eslint-disable-next-line
	}, [dispatch]);

	return (
		<div className="social">
			<section className="social__content">
				<HealthyDev top />
				<LoginForm />
			</section>
		</div>
	);
};

export default Social;
