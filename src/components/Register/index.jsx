import React from "react";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";

// Components
import Button from "../_shared/Button";

const CreateAccountForm = ({ setPayload }) => {
	const { register, handleSubmit, errors, getValues } = useForm();

	const onSubmit = async ({ name, email, password }) => {
		setPayload(
			JSON.stringify({
				name,
				email,
				password,
			}),
		);
	};

	return (
		<form className="register" autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
			<label name="name">Nombre</label>

			<input
				name="name"
				type="text"
				placeholder="Ingresa tu Nombre"
				ref={register({ required: true, maxLength: 30 })}
			/>
			{errors.name && errors.name.type === "required" && <p>This field is required</p>}
			{errors.name && errors.name.type === "maxLength" && <p>Max length is 30</p>}

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

			<input
				name="password"
				type="password"
				placeholder="******"
				ref={register({ required: true, maxLength: 20 })}
			/>
			{errors.password && <p>This field is required</p>}
			{errors.password && errors.password.type === "maxLength" && <p>Max length is 20</p>}

			<label name="confirmPassword">Confirmar Contraseña</label>
			<input
				name="confirmPassword"
				type="password"
				placeholder="******"
				ref={register({
					required: "This field is required",
					maxLength: 20,
					validate: (value) => {
						return value === getValues("password") ? true : "Passwords don't match";
					},
				})}
			/>
			{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
			{errors.confirmPassword && errors.confirmPassword.type === "maxLength" && (
				<p>Max length is 20</p>
			)}

			<Button fullWidth>Registrarme</Button>
		</form>
	);
};
export default CreateAccountForm;
