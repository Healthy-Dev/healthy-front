import React, { useState } from "react";
// Hooks
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";

// Components
import Button from "../_shared/Button";
import MessageError from "./MessageError";
import { ReactComponent as Eye } from "assets/icons/eye.svg";
import { ReactComponent as EyeOff } from "assets/icons/eye-off.svg";
import Loader from "components/_shared/Loader";

/* Password should be at least one capital letter, one small letter, one number and 8 character length */
const PASSWORD_FORMAT = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
const EMAIL_FORMAT = /\S+@\S+\.\S+/;

const CreateAccountForm = ({ sendFormRegister, loading }) => {
	const { register, handleSubmit, errors, getValues, reset } = useForm();
	const [isPasswordHidden, setPasswordHidden] = useState(true);
	const [isPassword2Hidden, setPassword2Hidden] = useState(true);

	const onSubmit = async ({ username, email, password }) => {
		sendFormRegister(
			JSON.stringify({
				username,
				email,
				password,
			}),
		);

		reset();
	};

	return (
		<form className="form__register" autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
			<section className="form__input">
				<label name="username">Nombre se Usuario</label>
				<input
					name="username"
					type="text"
					placeholder="Ingresa su nombre se usuario"
					ref={register({ required: true, maxLength: 30, minLength: 4 })}
				/>
				{errors.username && errors.username.type === "required" && (
					<MessageError message="Ingrese un nombre de usuario." />
				)}
				{errors.username && errors.username.type === "maxLength" && (
					<MessageError message="Maximo 30 caracteres." />
				)}
				{errors.username && errors.username.type === "minlength" && (
					<MessageError message="Minimo 4 caracteres." />
				)}
			</section>

			<section className="form__input">
				<label name="email">Email</label>
				<input
					name="email"
					type="email"
					placeholder="Ingresa tu email"
					ref={register({ required: true, pattern: EMAIL_FORMAT })}
				/>
				{errors.email && errors.email.type === "required" && (
					<MessageError message="Ingrese un Email" />
				)}
				{errors.email && errors.email.type === "pattern" && (
					<MessageError message="Ingrese un Email válido." />
				)}
			</section>

			<section className="form__input">
				<label name="password">Contraseña</label>
				<div className="input__container">
					<input
						type={isPasswordHidden ? "password" : "text"}
						name="password"
						placeholder="******"
						ref={register({
							required: true,
							minLength: 8,
							pattern: PASSWORD_FORMAT,
						})}
					/>
					<div
						onClick={() => setPasswordHidden(!isPasswordHidden)}
						className="input__icon"
					>
						{isPasswordHidden ? <Eye /> : <EyeOff />}
					</div>
				</div>
				{errors.password && errors.password.type === "required" && (
					<MessageError message="Ingrese una contraseña" />
				)}
				{errors.password && errors.password.type === "minLength" && (
					<MessageError message="Mínimo 8 caracteres." />
				)}
				{errors.password && errors.password.type === "pattern" && (
					<MessageError message="Debe contener una letra mayúscula, una minúscula y un número. Sin espacios." />
				)}
			</section>

			<section className="form__input">
				<label name="confirmPassword">Confirmar Contraseña</label>
				<div className="input__container">
					<input
						name="confirmPassword"
						type={isPassword2Hidden ? "password" : "text"}
						placeholder="******"
						ref={register({
							required: true,
							validate: (value) =>
								value === getValues("password") ? true : "Las contraseñas no coinciden",
						})}
					/>
					<div
						onClick={() => setPassword2Hidden(!isPassword2Hidden)}
						className="input__icon"
					>
						{isPassword2Hidden ? <Eye /> : <EyeOff />}
					</div>
				</div>
				{errors.confirmPassword && (
					<MessageError message={errors.confirmPassword.message} />
				)}
				{errors.confirmPassword && errors.confirmPassword.type === "required" && (
					<MessageError message="Confirmar contraseña." />
				)}
			</section>

			<Button className="button__register" fullWidth>
				{loading ? <Loader /> : "Registrarme"}
			</Button>
			<Link to="/login" className="link">
				Iniciar Sesion
			</Link>
		</form>
	);
};
export default CreateAccountForm;
