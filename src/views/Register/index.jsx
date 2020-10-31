import React, { useEffect } from "react";
import registerBackground from "assets/img/bg-register.png";
import logoHealthy from "assets/icons/Logo-heatlhy.svg";
// Redux
import { useDispatch, useSelector } from "react-redux";

import { requestRegister } from "state/auth/actions";
import { RegisterSelector } from "state/auth/selectors";
// Components
import Register from "components/Register";
import Alert from "components/_shared/Alert";
// Styles
import "./index.scss";
import useAuth from "hooks/useAuth";

const RegisterView = ({ history }) => {
	const { isAuth } = useAuth();
	const {
		loading,
		errorMessage,
		error,
		data,
		warning,
		messageWarning,
	} = useSelector((state) => RegisterSelector(state));
	const dispatch = useDispatch();

	useEffect(() => {
		if (isAuth) history.replace("/");
	}, [isAuth]); //eslint-disable-line

	function sendFormRegister(dataUser) {
		dispatch(requestRegister(dataUser));
	}

	useEffect(() => {
		if (data) {
			setTimeout(() => history.replace("/activate"), 2500);
		}
	}, [data]); //eslint-disable-line

	return (
		<div className="register-container">
			<div className="register-form">
				{error && errorMessage && (
					<Alert showButtonClose error>
						{errorMessage && errorMessage}
					</Alert>
				)}
				{warning && messageWarning && (
					<Alert showButtonClose error>
						{messageWarning && messageWarning}
					</Alert>
				)}
				<div className="desktop-title-wrapper">
					<h2 className="desktop-title">REGISTRO</h2>
					<img className="desktop-logo" alt="logo" src={logoHealthy} />
				</div>
				<h1 className="title">
					<span className="healthy">Healthy</span> <span className="dev">Dev</span>
				</h1>
				<h2 className="register-title">Registrate</h2>
				<Register sendFormRegister={sendFormRegister} loading={loading} />
			</div>
			<img src={registerBackground} className="register-img" alt="fondo" />
		</div>
	);
};

export default RegisterView;
