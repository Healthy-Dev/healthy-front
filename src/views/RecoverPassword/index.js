import React, { useState } from "react";
// Styles
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { requestForgotPassword } from "state/auth/actions";
import { forgotPasswordSelector } from "state/auth/selectors";

import Button from "components/_shared/Button";
import HealthyDev from "components/_shared/HealthyDev";
import Loader from "components/_shared/Loader";
import Alert from "components/_shared/Alert";

const RecoverPassword = () => {
	const dispatch = useDispatch();
	const { data, loading, errorMsg, error } = useSelector((state) =>
		forgotPasswordSelector(state),
	);

	const [email, setEmail] = useState({});
	const EMAIL_FORMAT = /\S+@\S+\.\S+/;

	function sendRecoverPass() {
		if (email.email && !email?.error) {
			dispatch(requestForgotPassword({ email: email.email }));
		}

		setEmail({ email: "" });
	}

	function handleChange(e) {
		if (!EMAIL_FORMAT.test(e.target.value)) {
			return setEmail({ error: "Ingrese un email valido" });
		}

		setEmail({ [e.target.name]: e.target.value });
	}

	console.log(data);

	function showInputEmail() {
		return (
			<section>
				<input
					type="email"
					required
					name="email"
					placeholder="Ingrese su email"
					onChange={handleChange}
					value={email.email}
				/>
				{email.error && <p className="error">{email?.error}</p>}
				<Button onClick={sendRecoverPass}>
					{loading ? <Loader /> : "Ingresa tu Email"}
				</Button>
			</section>
		);
	}

	return (
		<div className="recover__pass">
			{error && (
				<Alert error showButtonClose>
					{errorMsg}
				</Alert>
			)}
			<section className="recover__card">
				<h2 className="recover__card--title">Recuperar Contraseña</h2>
				{data ? (
					<p className="recover__card--msg">{data?.message}</p>
				) : (
					<>
						<p className="recover__card--msg">
							Ingresá el email asociado a tu cuenta y te mandaremos un messaje con un link
							para cambiar tu contraseña
						</p>
						{showInputEmail()}
					</>
				)}
			</section>
			<HealthyDev />
		</div>
	);
};

export default RecoverPassword;
