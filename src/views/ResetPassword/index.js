import React, { useState } from "react";
// Styles
import "./index.scss";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/_shared/Button";
import HealthyDev from "components/_shared/HealthyDev";

const ResetPassword = () => {
	const dispatch = useDispatch();
	const { search } = useLocation();
	// const isTokenPassword = search.includes("token");
	const token = search.replace("?token=", "");

	const [password, setPassword] = useState({});

	function sendRecoverPass() {
		const existPassword = Object.entries(password).length > 0;
		if (existPassword && !password?.error) {
			// dispatch(requestResetPassword({ token }));
		}
	}

	function handleChange(e) {
		const PASSWORD_FORMAT = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
		if (!PASSWORD_FORMAT.test(e.target.value)) {
			return setPassword({
				error: "Al menos una mayúscula, una minúscula y un número.",
			});
		}

		setPassword({ [e.target.name]: e.target.value });
	}

	function showInputEmail() {
		return (
			<section>
				<input
					type="text"
					required
					name="password"
					placeholder="Nueva contraseña"
					onChange={handleChange}
					value={password.value}
				/>
				{password.error && <p className="error">{password?.error}</p>}
				<Button onClick={sendRecoverPass}>Cambiar Contraseña</Button>
			</section>
		);
	}

	return (
		<div className="recover__pass">
			<section className="recover__card">
				<h2 className="recover__card--title">Recuperar Contraseña</h2>
				<p className="recover__card--msg">Ingresá una nueva contraseña para tu cuenta</p>
				{showInputEmail()}
			</section>
			<HealthyDev />
		</div>
	);
};

export default ResetPassword;
