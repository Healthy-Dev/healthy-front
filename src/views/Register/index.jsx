import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestRegister } from "state/register/actions";
import { RegisterSelector } from "state/register/selectors";
// Components
import Register from "components/Register";
import MessageError from "components/Register/MessageError";
// Styles
import "./index.scss";

const RegisterView = () => {
	const [payload, setPayload] = useState(null);
	const [errorMessage, setErrorMessage] = useState(false);
	const history = useHistory();
	const { data, loading, error } = useSelector((state) => RegisterSelector(state));
	const d = useDispatch();

	useEffect(() => {
		if (payload === null) {
			return;
		}
		d(requestRegister(payload));
	}, [d, payload]);

	useEffect(() => {
		if (data) {
			// TODO: Redirect to confirmation screen
			history.push("/");

			// TODO: setlocalstorage here??
		}
		if (error) {
			setErrorMessage(true);
		}
	}, [data, loading, error]);

	return (
		<div className="register-container">
			<h1>
				<span className="healthy">Healthy</span> <span className="dev">Dev</span>
			</h1>
			<h2 className="register-title">Registrate</h2>
			{errorMessage && <MessageError message="Oops, hubo un error durante el registro" />}
			<Register setPayload={setPayload} />
		</div>
	);
};

export default RegisterView;
