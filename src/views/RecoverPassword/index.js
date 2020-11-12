import React, { useState } from "react";
// Styles
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/_shared/Button";
import HealthyDev from "components/_shared/HealthyDev";

const RecoverPassword = () => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState({});
	const EMAIL_FORMAT = /\S+@\S+\.\S+/;

	function sendRecoverPass() {
		const existEmail = Object.entries(email).length > 0;
		if (existEmail && !email?.error) {
			// send recover password
		}
	}

	function handleChange(e) {
		if (!EMAIL_FORMAT.test(e.target.value)) {
			return setEmail({ error: "Ingrese un email valido" });
		}

		setEmail({ [e.target.name]: e.target.value });
	}

	function showInputEmail() {
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
				<Button onClick={sendRecoverPass}>Ingresa tu Email</Button>
			</section>
		);
	}

	return (
		<div className="recover__pass">
			<section className="recover__card">
				<h2 className="recover__card--title">Recuperar Contraseña</h2>
				<p className="recover__card--msg">
					Ingresá el email asociado a tu cuenta y te mandaremos un messaje con un link
					para cambiar tu contraseña
				</p>
				{showInputEmail()}
			</section>
			<HealthyDev />
		</div>
	);
};

export default RecoverPassword;
