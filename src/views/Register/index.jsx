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

const RegisterView = ({ history }) => {
	const { data, loading, error } = useSelector((state) => RegisterSelector(state));
	const dispatch = useDispatch();

	useEffect(() => {
		if (data) {
			history.replace("/");
		}
	}, [data]);

	function sendFormRegister(data) {
		dispatch(requestRegister(data));
	}

	return (
		<div className="register-container">
			{error && (
				<Alert showButtonClose error>
					Oops, hubo un error durante el registro
				</Alert>
			)}
			<h1>
				<span className="healthy">Healthy</span> <span className="dev">Dev</span>
			</h1>
			<h2 className="register-title">Registrate</h2>
			<Register sendFormRegister={sendFormRegister} loading={loading} />
		</div>
	);
};

export default RegisterView;
