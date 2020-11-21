import React, { useState } from "react";
// Styles
import "./index.scss";
import { Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { requestResetPassword } from "state/auth/actions";
import { resetPasswordSelector } from "state/auth/selectors";

import Button from "components/_shared/Button";
import HealthyDev from "components/_shared/HealthyDev";
import Loader from "components/_shared/Loader";
import Alert from "components/_shared/Alert";

const ResetPassword = ({ history }) => {
	const dispatch = useDispatch();
	const { data, loading, error, errorMsg } = useSelector((state) =>
		resetPasswordSelector(state),
	);
	const { search } = useLocation();
	const token = search.replace("?token=", "");

	const [password, setPassword] = useState({});

	function sendResetPass() {
		if (password.password && !password?.error) {
			dispatch(requestResetPassword({ token, password: JSON.stringify(password) }));
		}
	}

	function handleChange(e) {
		const PASSWORD_FORMAT = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
		if (!PASSWORD_FORMAT.test(e.target.value)) {
			return setPassword({
				error: "Al menos una mayúscula, una minúscula y un número.",
			});
		}

		setPassword({ password: e.target.value });
	}

	function handlePress(e) {
		if (e.keyCode === 13) {
			sendResetPass();
		}
	}

	function showInputEmail() {
		return (
			<section>
				<input
					type="text"
					required
					placeholder="Nueva contraseña"
					onChange={handleChange}
					onKeyDown={handlePress}
				/>
				{password.error && <p className="error">{password?.error}</p>}
				<Button onClick={sendResetPass}>
					{loading ? <Loader /> : "Cambiar Contraseña"}
				</Button>
			</section>
		);
	}

	return (
		<div className="recover__pass">
			{error && (
				<Alert error showButtonClose>
					{errorMsg}
					<Link to="/recover_password" className="span">
						{" "}
						Enviar otra solicitud
					</Link>
				</Alert>
			)}
			<section className="recover__card">
				<h2 className="recover__card--title">Recuperar Contraseña</h2>
				{data ? (
					<>
						<p className="recover__card--msg">{data?.message}</p>
						<Button onClick={() => history.push("/login")}>Iniciar Session</Button>
					</>
				) : (
					<>
						<p className="recover__card--msg">
							Ingresá una nueva contraseña para tu cuenta
						</p>
						{showInputEmail()}
					</>
				)}
			</section>
			<HealthyDev />
		</div>
	);
};

export default ResetPassword;
