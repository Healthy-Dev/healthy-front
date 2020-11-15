import React, { useEffect } from "react";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook.svg";
import { ReactComponent as GoogleIcon } from "assets/icons/google.svg";
// Redux
import { useDispatch, useSelector } from "react-redux";

import { requestLogin, hiddenMsgAlert } from "state/auth/actions";
import { LoginSelector, hiddenMsgAuthSelector } from "state/auth/selectors";
// Components
import LoginForm from "components/Login";
import Alert from "components/_shared/Alert";
import useAuth from "hooks/useAuth";
// Styles
import "./index.scss";
import loginBackground from "assets/img/desktopLoginBg.png";
import logoHealthy from "assets/icons/Logo-heatlhy.svg";
import HealthyDev from "components/_shared/HealthyDev";
import LinkButton from "components/Login/LinkButton";

const LoginView = ({ history }) => {
	const dispatch = useDispatch();
	const { isAuth, startSession } = useAuth();
	const { data, loading, error, warning } = useSelector((state) => LoginSelector(state));

	const { data: messageAuth } = useSelector((state) => hiddenMsgAuthSelector(state));

	const loginUser = (payload) => {
		dispatch(requestLogin(payload));
	};

	function hiddenAlert() {
		dispatch(hiddenMsgAlert());
	}

	useEffect(() => {
		if (isAuth) history.replace("/");
	}, [isAuth]); //eslint-disable-line

	useEffect(() => {
		if (data) {
			startSession(data.accessToken);
		}
	}, [data]); //eslint-disable-line

	let linkFacebook = "https://healthydev.herokuapp.com/v1/auth/facebook";
	let linkGoogle = "https://healthydev.herokuapp.com/v1/auth/google";

	return (
		<div className="login-wrapper">
			{messageAuth && (
				<Alert
					error={error || warning}
					success={!error}
					showButtonClose
					click={hiddenAlert}
				>
					{messageAuth}
				</Alert>
			)}
			<div className="login-container">
				<div className="desktop-title-wrapper">
					<h2 className="desktop-title">INICIAR SESION</h2>
					<img className="desktop-logo" alt="logo" src={logoHealthy} />
				</div>

				<HealthyDev className="login-logo" top />

				<div className="login-content">
					<section>
						<LinkButton link={linkFacebook} icon={FacebookIcon} title="facebook" />
						<LinkButton link={linkGoogle} icon={GoogleIcon} title="google" />
						<LoginForm sendLogin={loginUser} loading={loading} />
					</section>
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
