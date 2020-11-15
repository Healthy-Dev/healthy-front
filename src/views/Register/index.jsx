import React, { useEffect } from "react";
import registerBackground from "assets/img/bg-register.png";
import logoHealthy from "assets/icons/Logo-heatlhy.svg";
// Redux
import { useDispatch, useSelector } from "react-redux";

import { requestRegister, hiddenMsgAlert } from "state/auth/actions";
import { RegisterSelector, hiddenMsgAuthSelector } from "state/auth/selectors";
// Components
import Register from "components/Register";
import Alert from "components/_shared/Alert";
// Styles
import "./index.scss";
import useAuth from "hooks/useAuth";
import HealthyDev from "components/_shared/HealthyDev";

const RegisterView = ({ history }) => {
	const { isAuth } = useAuth();
	const { loading, error, data, warning } = useSelector((state) =>
		RegisterSelector(state),
	);
	const dispatch = useDispatch();

	const { data: message } = useSelector((state) => hiddenMsgAuthSelector(state));

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

	function hiddenAlert() {
		dispatch(hiddenMsgAlert());
	}

	return (
		<div className="register-container">
			<div className="register-form">
				{message && (
					<Alert
						showButtonClose
						error={error || warning}
						success={!error && !warning}
						click={hiddenAlert}
					>
						{message}
					</Alert>
				)}
				<div className="desktop-title-wrapper">
					<h2 className="desktop-title">REGISTRO</h2>
					<img className="desktop-logo" alt="logo" src={logoHealthy} />
				</div>
				<HealthyDev className="register-logo" top />
				<Register sendFormRegister={sendFormRegister} loading={loading} />
			</div>
			<img src={registerBackground} className="register-img" alt="fondo" />
		</div>
	);
};

export default RegisterView;
