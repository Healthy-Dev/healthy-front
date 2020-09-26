import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestRegister } from "state/register/actions";
import { RegisterSelector } from "state/register/selectors";
// Components
import Register from "components/Register";
import Alert from "components/_shared/Alert";
// Styles
import "./index.scss";
import useAuth from "hooks/useAuth";

const RegisterView = ({ history }) => {
	const { startSession, isAuth } = useAuth();
	const { data, loading, errorMessage, error } = useSelector((state) =>
		RegisterSelector(state),
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (data) {
			startSession(data.accessToken);
			history.replace("/");
		}
		if (isAuth) history.replace("/");
	}, [data, isAuth]); //eslint-disable-line

	function sendFormRegister(data) {
		dispatch(requestRegister(data));
	}

	return (
		<div className="register-container">
			{error ||
				(errorMessage && (
					<Alert showButtonClose error>
						{errorMessage && errorMessage}
					</Alert>
				))}
			<h1>
				<span className="healthy">Healthy</span> <span className="dev">Dev</span>
			</h1>
			<h2 className="register-title">Registrate</h2>
			<Register sendFormRegister={sendFormRegister} loading={loading} />
		</div>
	);
};

export default RegisterView;
