import React, { useEffect, useState } from "react";
// Styles
import "./index.scss";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ResendVerificationSelector, VerifySelector } from "state/auth/selectors";
import { requestResendVerification, requestVerify } from "state/auth/actions";

import Button from "components/_shared/Button";
import useAuth from "hooks/useAuth";

const UserCreated = () => {
	const { search } = useLocation();
	const history = useHistory();
	const { startSession } = useAuth();

	const dispatch = useDispatch();
	const { errorMessage, messageWarning, warning, data, error } = useSelector((state) =>
		VerifySelector(state),
	);

	const {
		data: dataResendVerification,
		warning: warningResendVerification,
		messageWarning: messageWarningResendVerification,
		error: errorResendVerification,
		errorMessage: messageErrorWarningResendVerification,
	} = useSelector((state) => ResendVerificationSelector(state));

	const isTokenFromEmail = search.includes("token");
	const token = search.replace("?token=", "");

	useEffect(() => {
		if (isTokenFromEmail) {
			dispatch(requestVerify({ token }));
			if (data) startSession(token);
		}

		if (dataResendVerification || data) {
			setEmail({ value: "" });
		}
		// eslint-disable-next-line
	}, [isTokenFromEmail, token, dispatch, dataResendVerification]);

	const [email, setEmail] = useState({});
	const EMAIL_FORMAT = /\S+@\S+\.\S+/;

	function reSendVeirfy() {
		history.replace("/activate");
		if (!email?.error) {
			dispatch(requestResendVerification({ email: email.value }));
		}
	}

	function handleChange(e) {
		if (!EMAIL_FORMAT.test(e.target.value)) {
			setEmail({ error: "Ingrese un email valido" });
		} else {
			setEmail({ value: e.target.value });
		}
	}

	function start() {
		history.replace("/");
	}

	console.log(dataResendVerification);

	return (
		<div className="user-created-container">
			<p className="user-created">¡Tu usuario ya fue creado!</p>
			<div className="user-created-confirm">
				{!isTokenFromEmail ? (
					<p>
						{dataResendVerification
							? dataResendVerification?.message
							: warningResendVerification
							? messageWarningResendVerification
							: errorResendVerification
							? messageErrorWarningResendVerification
							: "Confirma tu cuenta desde tu email"}
					</p>
				) : (
					error && errorMessage
				)}
				{warning ? (
					<>
						<p>{messageWarning}</p>
						<Button onClick={() => history.push("/login")}>Iniciar Sesion</Button>
					</>
				) : warningResendVerification ? (
					<>
						<Button onClick={() => history.push("/login")}>Iniciar Sesion</Button>
					</>
				) : (
					<section>
						<input
							type="email"
							required
							placeholder="Ingrese su email"
							onChange={handleChange}
							value={email.value}
						/>
						{email.error && <p className="error">{email?.error}</p>}
						<Button onClick={reSendVeirfy}>Reenviar Verificación</Button>
					</section>
				)}
			</div>
			{data && <Button onClick={start}>Continuar</Button>}
			<h1>
				<span className="healthy">Healthy</span> <span className="dev">Dev</span>
			</h1>
		</div>
	);
};

export default UserCreated;
