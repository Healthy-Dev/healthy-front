import React, { useState } from "react";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";

// Components
import Button from "../_shared/Button";
import MessageError from "./MessageError";
import { ReactComponent as Eye } from "assets/icons/eye.svg";
import { ReactComponent as EyeOff } from "assets/icons/eye-off.svg";

/* Password should be at least one capital letter, one small letter, one number and 8 character length */
const PASSWORD_FORMAT = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

const CreateAccountForm = ({ setPayload }) => {
	const { register, handleSubmit, errors, getValues } = useForm();
	const [isPasswordHidden, setPasswordHidden] = useState(true);
	const [isPassword2Hidden, setPassword2Hidden] = useState(true);

	const onSubmit = async ({ username, email, password }) => {
		setPayload(
			JSON.stringify({
				username,
				email,
				password,
			}),
		);
	};

	return (
		<form className="form__register" autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
			<label name="username">Nombre</label>

			<input
				name="username"
				type="text"
				placeholder="Ingresa tu Nombre"
				ref={register({ required: true, maxLength: 30, minLength: 4 })}
			/>
			{errors.username && errors.username.type === "required" && (
				<MessageError message="Ingrese su nombre." />
			)}
			{errors.username && errors.username.type === "maxLength" && (
				<MessageError message="Maximo 30 caracteres." />
			)}
			{errors.username && errors.username.type === "minlength" && (
				<MessageError message="Minimo 4 caracteres." />
			)}

			<label name="email">Email</label>

			<input
				name="email"
				type="email"
				placeholder="Ingresa tu email"
				ref={register({ required: true, maxLength: 30 })}
			/>
			{errors.email && errors.email.type === "required" && <p>This field is required</p>}
			{errors.email && errors.email.type === "maxLength" && <p>Max length is 30</p>}

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

			{errors.password && errors.password.type === "maxLength" && (
				<MessageError message="Máximo 250 caracteres." />
			)}
			{errors.password && errors.password.type === "minLength" && (
				<MessageError message="Mínimo 8 caracteres." />
			)}
			{errors.password && errors.password.type === "pattern" && (
				<MessageError message="Debe contener una letra mayúscula, una minúscula y un número. Sin espacios." />
			)}

			<label name="confirmPassword">Confirmar Contraseña</label>
			<div className="input__container">
				<input
					name="confirmPassword"
					type={isPassword2Hidden ? "password" : "text"}
					placeholder="******"
					ref={register({
						required: true,
						validate: (value) => {
							return value === getValues("password") ? (
								true
							) : (
								<MessageError message="Las contraseñas no coinciden." />
							);
						},
					})}
				/>
				<div
					onClick={() => setPassword2Hidden(!isPassword2Hidden)}
					className="input__icon"
				>
					{isPassword2Hidden ? <Eye /> : <EyeOff />}
				</div>
			</div>
			{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
			{errors.confirmPassword && errors.confirmPassword.type === "required" && (
				<MessageError message="Confirmar contraseña." />
			)}

			<Button className="button__register" fullWidth>
				Registrarme
			</Button>
		</form>
	);
};
export default CreateAccountForm;
