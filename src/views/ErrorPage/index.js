import React from "react";
import "./index.scss";
import { ReactComponent as ErrorIcon } from "assets/icons/notFound.svg";
import Button from "components/_shared/Button";

const ErrorPage = ({ history }) => {
	return <div className="cuatrocientoscuatro">
		<p>Ups! No encontramos lo que estás buscando</p>
		<ErrorIcon />
		<Button onClick={() => history.replace("/")} >Volver al Inicio</Button>
	</div>;
};

export default ErrorPage;
