import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestRegister } from "state/register/actions";
import { RegisterSelector } from "state/register/selectors";
// Components
import Register from "components/Register";
// Styles
import "./index.scss";

const RegisterView = () => {
	const [payload, setPayload] = useState(null);
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
			const cardId = data.id;
			history.push(`/details/${cardId}`);
		}
	}, [data, loading, error, history]);

	return (
		<div className="register-container">
			<h1>Healthy Dev</h1>
			<h2>Registrate</h2>
			<Register setPayload={setPayload} />
		</div>
	);
};

export default RegisterView;
