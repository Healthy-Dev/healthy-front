import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";

import { ReactComponent as IconLoader } from "assets/icons/loader.svg";
// Components
import Button from "../_shared/Button";
import MessageError from "./MessageError";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook.svg";
import { ReactComponent as GoogleIcon } from "assets/icons/google.svg";
import { ReactComponent as Eye } from "assets/icons/eye.svg";
import { ReactComponent as EyeOff } from "assets/icons/eye-off.svg";

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

			<label name="usernameOrEmail" htmlFor="user">
				Email/Usuario
			</label>
			<input
				id="user"
				type="text"
				name="usernameOrEmail"
				placeholder="ejemplo@healthydev.com"
				ref={register({ required: true })}
			/>
			{errors.usernameOrEmail && <MessageError message="Ingrese su usuario o email." />}

			<label name="password" htmlFor="password">
				Contraseña
			</label>
			<div className="input__container">
				<input
					id="password"
					type={isPasswordHidden ? "password" : "text"}
					name="password"
					placeholder="******"
					ref={register({
						required: true,
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

			<Button
				className="button__login"
				disabled={Object.entries(errors).length > 0 ? true : false}
			>
				{loading ? <IconLoader className="icon-loader" /> : "Ingresar"}
			</Button>
		</form>
	);
};
export default CreateCardForm;
