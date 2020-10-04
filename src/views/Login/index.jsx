import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";

import { requestLogin } from "state/auth/actions";
import { LoginSelector } from "state/auth/selectors";
// Components
import Login from "components/Login";
import Alert from "components/_shared/Alert";
import useAuth from "hooks/useAuth";
// Styles
import "./index.scss";

const LoginView = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector((state) => LoginSelector(state));
	const { isAuth, startSession } = useAuth();

	const loginUser = (payload) => {
		dispatch(requestLogin(payload));
	};

	useEffect(() => {
		if (isAuth) history.replace("/");
	}, [isAuth]); //eslint-disable-line

	useEffect(() => {
		if (data) {
			startSession(data.accessToken);
		}
	}, [data]); //eslint-disable-line

	return (
		<div className="login-container">
			{error ? (
				<Alert showButtonClose error>
					Disculpa, no pudimos loguear tu usuario con esa información.{" "}
					<a href="!#" onClick={() => history.push("/reset_password")}>
						¿Necesitás resetear tu contraseña?
					</a>
				</Alert>
			) : null}
			<h1>
				<span className="healthy">Healthy</span> <span className="dev">Dev</span>
			</h1>
			<Login sendLogin={loginUser} loading={loading} />
			<footer>
				<p>¿Todavía no tenés una cuenta?</p>
				<p
					role="button"
					className="button__link"
					onClick={() => history.push("/register")}
				>
					Registrate
				</p>
			</footer>
		</div>
	);
};

export default LoginView;
