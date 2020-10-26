import React, { useEffect } from "react";
// Styles
import "./index.scss";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { VerifySelector } from "state/auth/selectors";
import { requestVerify } from "state/auth/actions";

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

	const isActiveAccount = search.includes("token");
	const token = search.replace("?token=", "");

	useEffect(() => {
		if (isActiveAccount) {
			dispatch(requestVerify({ token }));
			if (data) startSession(token);
			//verificar cuenta
		}
		//eslint-disable-next-line
	}, [isActiveAccount, token, dispatch]);

	function reSendVeirfy() {
		//todo reenviar verificacion
		console.log("volver a enviar verificacion");
	}

	function start() {
		history.replace("/");
	}

	return (
		<div className="user-created-container">
			<p className="user-created">¡Tu usuario ya fue creado!</p>
			<div className="user-created-confirm">
				{!isActiveAccount && <p>Confirma tu cuenta desde tu email</p>}
				{error && (
					<>
						<p>{errorMessage}</p>
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
