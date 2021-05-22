import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";

// Components
import Button from "../_shared/Button";
import MessageError from "./MessageError";
import Loader from "components/_shared/Loader";
import { ReactComponent as Eye } from "assets/icons/eye.svg";
import { ReactComponent as EyeOff } from "assets/icons/eye-off.svg";

const LoginForm = ({ sendLogin, loading }) => {
	const { register, handleSubmit, errors, reset } = useForm();
	const history = useHistory();
	const [isPasswordHidden, setPasswordHidden] = useState(true);

	const onSubmit = async ({ usernameOrEmail, password }) => {
		sendLogin(
			JSON.stringify({
				usernameOrEmail,
				password,
			}),
		);

		reset();
	};

	return (
		<form className="form__login" autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
			<section className="form__login--input">
				<label name="usernameOrEmail" htmlFor="user">
					Email/Usuario
				</label>
				<input
					className="input-login"
					id="user"
					type="text"
					name="usernameOrEmail"
					placeholder="ejemplo@healthydev.com"
					ref={register({ required: true })}
				/>
				{errors.usernameOrEmail && <MessageError message="Ingrese su usuario o email." />}
			</section>

			<section className="form__login--input">
				<label name="password" htmlFor="password">
					Contraseña
				</label>
				<div className="input__container">
					<input
						className="input-login"
						id="password"
						type={isPasswordHidden ? "password" : "text"}
						name="password"
						placeholder="******"
						ref={register({
							required: true,
						})}
					/>
					<div
						onClick={() => setPasswordHidden(!isPasswordHidden)}
						className="input__icon"
					>
						{isPasswordHidden ? <Eye /> : <EyeOff />}
					</div>
				</div>
				{errors.password && <MessageError message="Ingrese su contraseña." />}
			</section>

			<p
				role="button"
				className="forgot-password"
				onClick={() => history.push("/recover_password")}
			>
				¿Olvidaste tu contraseña?
			</p>

			<Button
				className="button-main button__login"
				disabled={Object.entries(errors).length > 0 ? true : false}
			>
				{loading ? <Loader /> : "Ingresar"}
			</Button>
		</form>
	);
};
export default LoginForm;
