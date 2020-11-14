import React, { useEffect } from "react";
// Styles
import "./index.scss";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { VerifySelector } from "state/auth/selectors";
import { requestVerify } from "state/auth/actions";

import Button from "components/_shared/Button";
import HealthyDev from "components/_shared/HealthyDev";

const UserCreated = ({ history }) => {
	const { search } = useLocation();

	const dispatch = useDispatch();
	const { errorMessage, data, error, messageWarning, warning } = useSelector((state) =>
		VerifySelector(state),
	);

	const isTokenFromEmail = search.includes("token");
	const token = search.replace("?token=", "");

	useEffect(() => {
		if (isTokenFromEmail) {
			dispatch(requestVerify({ token }));
		}
		// eslint-disable-next-line
	}, [token, dispatch]);
	console.log(data);

	return (
		<div className="activate">
			<h2 className="activate__title">¡Activar Cuenta!</h2>
			<section>
				{error && errorMessage}
				{error && (
					<Button onClick={() => history.push("/user-created")}>
						Reenviar Verificación
					</Button>
				)}
				{data && data}
				{data && <Button onClick={() => history.push("/login")}>Iniciar Sesión</Button>}
				{warning && messageWarning}
				{warning && (
					<Button onClick={() => history.push("/login")}>Iniciar Sesión</Button>
				)}
			</section>
			<HealthyDev />
		</div>
	);
};

export default UserCreated;
