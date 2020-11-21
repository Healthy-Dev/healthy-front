import React, { useEffect } from "react";
// Styles
import "./index.scss";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUserRequest } from "state/user/actions";
import { UserSelector } from "state/user/selectors";

import useAuth from "hooks/useAuth";
import LoginView from "views/Login";
import Loader from "components/_shared/Loader";
import Alert from "components/_shared/Alert";

const Social = ({ history }) => {
	const { search } = useLocation();
	const { startSession } = useAuth();
	const dispatch = useDispatch();
	const { loading, data, error } = useSelector((state) => UserSelector(state));

	const isTokenFromEmail = search.includes("token");
	const token = search.replace("?token=", "");

	useEffect(() => {
		if (isTokenFromEmail) {
			dispatch(getUserRequest({ token }));
		}
	}, []); //eslint-disable-line

	useEffect(() => {
		if (data) {
			startSession(token);
			history.replace("/");
		}
	}, [data]); //eslint-disable-line

	return (
		<div className="auth__social">
			{loading && <Loader center className="auth__social--loader" />}
			{error && (
				<Alert error showButtonClose click={() => history.replace("/login")}>
					Algo salio mal intentelo mas tarde
				</Alert>
			)}
			<LoginView />
		</div>
	);
};

export default Social;
