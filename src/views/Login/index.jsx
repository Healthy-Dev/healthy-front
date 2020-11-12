import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";

import { requestLogin, hiddenMsgAlert } from "state/auth/actions";
import { LoginSelector, hiddenMsgAuthSelector } from "state/auth/selectors";
// Components
import Login from "components/Login";
import Alert from "components/_shared/Alert";
import useAuth from "hooks/useAuth";
// Styles
import "./index.scss";
import loginBackground from "assets/img/desktopLoginBg.png";
import logoHealthy from "assets/icons/Logo-heatlhy.svg";

const LoginView = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector((state) => LoginSelector(state));
	const { isAuth, startSession } = useAuth();

	const { data: messageAuth } = useSelector((state) => hiddenMsgAuthSelector(state));

	const loginUser = (payload) => {
		dispatch(requestLogin(payload));
	};

	useEffect(() => {
		if (isAuth) history.replace("/");
	}, [isAuth]); //eslint-disable-line

	useEffect(() => {
		if (data) {
			startSession(data.accessToken, 2);
		}
	}, [data]); //eslint-disable-line

	function hiddenAlert() {
		dispatch(hiddenMsgAlert());
	}

	return (
		<div className="login-wrapper">
			{messageAuth && (
				<Alert error={error} showButtonClose click={hiddenAlert}>
					{messageAuth}
				</Alert>
			)}
			<div className="login-container">
				<div className="desktop-title-wrapper">
					<h2 className="desktop-title">INICIAR SESION</h2>
					<img className="desktop-logo" alt="logo" src={logoHealthy} />
				</div>
				<h1>
					<span className="healthy">Healthy</span> <span className="dev">Dev</span>
				</h1>
				<div className="login-footer">
					<Login sendLogin={loginUser} loading={loading} />
					<footer>
						<p role="button" className="button__link">
							¿Todavía no tenés una cuenta?{" "}
							<span onClick={() => history.push("/register")}>Registrate</span>
						</p>
					</footer>
				</div>
			</div>
			<img className="login-img" alt="portada" src={loginBackground} />
		</div>
	);
};

export default LoginView;
