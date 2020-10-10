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
import loginBackground from 'assets/img/desktopLoginBg.png'
import logoHealthy from 'assets/icons/Logo-heatlhy.svg'

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
		<div className='login-wrapper'>
			<div className="login-container">
				{error ? (
					<Alert showButtonClose error>
						Disculpa, no pudimos loguear tu usuario con esa información.{" "}
						<a href="!#" onClick={() => history.push("/reset_password")}>
							¿Necesitás resetear tu contraseña?
						</a>
					</Alert>
				) : null}
				<div className='desktop-title-wrapper'>
					<h2 className='desktop-title'>INICIAR SESION</h2>
					<img className='desktop-logo' src={logoHealthy} />
				</div>
				<h1>
					<span className="healthy">Healthy</span> <span className="dev">Dev</span>
				</h1>
				<div className='login-footer'>
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
			</div>
			<img className='login-img' src={loginBackground} />
		</div>
	);
};

export default LoginView;
