import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";

// Components
import Button from "../_shared/Button";
import MessageError from "./MessageError";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook.svg";
import { ReactComponent as GoogleIcon } from "assets/icons/google.svg";
import { ReactComponent as Eye } from "assets/icons/eye.svg";
import { ReactComponent as EyeOff } from "assets/icons/eye-off.svg";

/* Password should be at least one capital letter, one small letter, one number and 8 character length */
const PASSWORD_FORMAT = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

const CreateCardForm = ({ sendLogin, loading }) => {
	const { register, handleSubmit, errors } = useForm();
	const history = useHistory();
	const [isPasswordHidden, setPasswordHidden] = useState(true);

	const onSubmit = async ({ usernameOrEmail, password }) => {
		sendLogin(
			JSON.stringify({
				usernameOrEmail,
				password,
			}),
		);
	};

	return (
		<form className="form__login" autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
			<Button className="blue" fullWidth>
				<FacebookIcon />
				Continuar con Facebook
			</Button>
			<Button className="red" fullWidth>
				<GoogleIcon />
				Continuar con Google
			</Button>

			<label name="usernameOrEmail">Email/Usuario</label>
			<input
				type="text"
				name="usernameOrEmail"
				placeholder="ejemplo@healthydev.com"
				ref={register({ required: true, maxLength: 100, minLength: 4 })}
			/>
			{errors.usernameOrEmail && errors.usernameOrEmail.type === "required" && (
				<MessageError message="Ingrese su usuario o email." />
			)}
			{errors.usernameOrEmail && errors.usernameOrEmail.type === "maxLength" && (
				<MessageError message="Máximo 100 caracteres." />
			)}
			{errors.usernameOrEmail && errors.usernameOrEmail.type === "minLength" && (
				<MessageError message="Mínimo 4 caracteres." />
			)}

			<label name="password">Contraseña</label>
			<div className="input__container">
				<input
					type={isPasswordHidden ? "password" : "text"}
					name="password"
					placeholder="******"
					ref={register({
						required: true,
						maxLength: 250,
						minLength: 8,
						pattern: PASSWORD_FORMAT,
					})}
				/>
				<div onClick={() => setPasswordHidden(!isPasswordHidden)} className="input__icon">
					{isPasswordHidden ? <Eye /> : <EyeOff />}
				</div>
			</div>

			<p
				role="button"
				className="button__link--grey"
				onClick={() => history.push("/reset_password")}
			>
				¿Olvidaste tu contraseña?
			</p>
			{errors.password && <MessageError message="Ingrese su contraseña." />}
			{errors.password && errors.password.type === "maxLength" && (
				<MessageError message="Máximo 250 caracteres." />
			)}
			{errors.password && errors.password.type === "minLength" && (
				<MessageError message="Mínimo 8 caracteres." />
			)}
			{errors.password && errors.password.type === "pattern" && (
				<MessageError message="Debe contener una letra mayúscula, una minúscula y un número. Sin espacios." />
			)}

			<Button className="button__login" fullWidth>
				Ingresar
			</Button>
		</form>
	);
};
export default CreateCardForm;
