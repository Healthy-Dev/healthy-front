import React from "react";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";

// Components
import Button from "../_shared/Button";

const CreateCardForm = ({ setPayload }) => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = async ({ email, password }) => {
		setPayload(
			JSON.stringify({
				email,
				password
			}),
		);
	};

	return (
		<form className="Login" autoComplete="on" onSubmit={handleSubmit(onSubmit)}>

			<Button fullWidth>Continuar con Facebook</Button>
			<Button fullWidth>Continuar con Google</Button>

			<label name="email">Email</label>

			<input
				name="email"
				placeholder="Ingresa un título"
				ref={register({ required: true, maxLength: 30 })}
			/>
			{ errors.email && errors.email.type === "required" && <p>This field is required</p>}
			{ errors.email && errors.email.type === "maxLength" && <p>Max length is 30</p>}

			<label name="password">Contraseña</label>

			<input
				name="password"
				placeholder="******"
				ref={register({ required: true, maxLength: 20 })}
			/>
			{errors.password && <p>This field is required</p>}
			{ errors.password && errors.password.type === "maxLength" && (
				<p>Max length is 20</p>
			)}

			<Button fullWidth>Ingresar</Button>
			<p>¿Todavía no tenés cuenta? Registrate</p>
		</form>
	);
};
export default CreateCardForm;
