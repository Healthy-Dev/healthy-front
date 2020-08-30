import React from "react";
import { useHistory } from "react-router-dom";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";

// Components
import Button from "../_shared/Button";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook.svg";
import { ReactComponent as GoogleIcon } from "assets/icons/google.svg";
import { ReactComponent as Eye } from "assets/icons/eye.svg";

const CreateCardForm = ({ setPayload }) => {
	const { register, handleSubmit, errors } = useForm();
	const history = useHistory();

	const onSubmit = async ({ email, password }) => {
		setPayload(
			JSON.stringify({
				email,
				password,
			}),
		);
	};

	return (
		<form className="Login" autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
			<Button className="blue" fullWidth>
				<FacebookIcon />
				Continuar con Facebook
			</Button>
			<Button className="red" fullWidth>
				<GoogleIcon />
				Continuar con Google
			</Button>

			<label name="email">Email</label>
			<input
				name="email"
				placeholder="ejemplo@healthydev.com"
				ref={register({ required: true, maxLength: 30 })}
			/>
			{errors.email && errors.email.type === "required" && <p>This field is required</p>}
			{errors.email && errors.email.type === "maxLength" && <p>Max length is 30</p>}

			<label name="password">Contraseña</label>
			<div className="input-container">
				<input
					name="password"
					placeholder="******"
					ref={register({ required: true, maxLength: 20 })}
				/>
				<Eye />
			</div>

			<p
				role="button"
				className="button__link--grey"
				onClick={() => history.push("/reset_password")}
			>
				¿Olvidaste tu contraseña?
			</p>
			{errors.password && <p>This field is required</p>}
			{errors.password && errors.password.type === "maxLength" && <p>Max length is 20</p>}

			<Button className="button--login" fullWidth>
				Ingresar
			</Button>
		</form>
	);
};
export default CreateCardForm;
