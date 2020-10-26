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

	const { data: dataResendVerification } = useSelector((state) =>
		ResendVerificationSelector(state),
	);

	const isTokenFromEmail = search.includes("token");
	const token = search.replace("?token=", "");

	useEffect(() => {
		if (isTokenFromEmail) {
			dispatch(requestVerify({ token }));
			if (data) startSession(token);
		}
		// eslint-disable-next-line
	}, [isTokenFromEmail, token, dispatch]);

	const [email, setEmail] = useState({});
	const EMAIL_FORMAT = /\S+@\S+\.\S+/;

	function reSendVeirfy() {
		if (!email?.error) {
			const sendEmail = { email: email.value };
			dispatch(requestResendVerification({ email: sendEmail }));
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
				{!isTokenFromEmail && <p>Confirma tu cuenta desde tu email</p>}
				{error && (
					<>
						<p>{errorMessage}</p>
						<section>
							<input
								type="email"
								required
								placeholder="Ingrese su email"
								onChange={handleChange}
							/>
							{email.error && <p className="error">{email?.error}</p>}
						</section>
						<Button onClick={reSendVeirfy}>Reenviar Verificación</Button>
					</>
				)}
				{warning && (
					<>
						<p>{messageWarning}</p>
						<Button onClick={start}>Continuar</Button>
					</>
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
