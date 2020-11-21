import React, { useState } from "react";
// Styles
import "./index.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestResendVerification } from "state/auth/actions";
import { ResendVerificationSelector } from "state/auth/selectors";

import Button from "components/_shared/Button";
import HealthyDev from "components/_shared/HealthyDev";

const UserCreated = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { data, error, warning, errorMessage, messageWarning } = useSelector((state) =>
		ResendVerificationSelector(state),
	);

	const [email, setEmail] = useState({});
	const EMAIL_FORMAT = /\S+@\S+\.\S+/;

	function reSendVeirfy() {
		const existEmail = Object.entries(email).length > 0;
		if (existEmail && !email?.error) {
			dispatch(requestResendVerification({ email: email.email }));
		}
	}

	function handleChange(e) {
		if (!EMAIL_FORMAT.test(e.target.value)) {
			return setEmail({ error: "Ingrese un email valido" });
		}

		setEmail({ [e.target.name]: e.target.value });
	}

	function inputResend() {
		return (
			<section>
				<input
					type="email"
					required
					name="email"
					placeholder="Ingrese su email"
					onChange={handleChange}
					value={email.value}
				/>
				{email.error && <p className="error">{email?.error}</p>}
				<Button onClick={reSendVeirfy}>Reenviar Verificación</Button>
			</section>
		);
	}

	return (
		<div className="user-created-container">
			<section className="resend-email">
				<h2 className="user-created">¡Tu usuario ya fue creado!</h2>
				<p className="user-msg">
					{error
						? errorMessage
						: warning
						? messageWarning
						: data
						? data?.message
						: "Confirma tu cuenta desde tu email!"}
				</p>
				{error && <span onClick={() => history.push("/register")}>Crear una cuenta</span>}
				{warning && <span onClick={() => history.push("/login")}>Iniciar Sesión</span>}
				{!warning && inputResend()}
			</section>
			<HealthyDev />
		</div>
	);
};

export default UserCreated;
