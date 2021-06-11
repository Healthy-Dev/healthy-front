import React from "react";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";

// Components
import Button from "../_shared/Button";
import Loader from "components/_shared/Loader";
import FormInput from "components/_shared/FormInput";

/* Password should be at least one capital letter, one small letter, one number and 8 character length */
const USERNAME_FORMAT = /(?=^.{4,20}$)^[a-zA-Z]+[a-zA-Z\-\_0-9.]+[a-zA-Z0-9]+$/; //eslint-disable-line
const PASSWORD_FORMAT = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
const EMAIL_FORMAT = /\S+@\S+\.\S+/;

const RegisterForm = ({ sendFormRegister, loading }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  // const [isPassword2Hidden, setPassword2Hidden] = useState(true);

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
      <FormInput
        name="username"
        label="Nombre de Usuario"
        type="text"
        placeholder="Ingresa un nombre de usuario"
        errors={errors}
        ref={register({
          required: "Ingrese un nombre de usuario.",
          minLength: {
            value: 4,
            message: "Mínimo 4 caracteres.",
          },
          pattern: {
            value: USERNAME_FORMAT,
            message:
              "Comience con letras, puede contener letras y números, y punto, guion medio o bajo en medio.",
          },
          maxLength: {
            value: 30,
            message: "Maximo 30 caracteres.",
          },
        })}
      />

      <FormInput
        name="email"
        errors={errors}
        label="Email"
        type="email"
        placeholder="Ingresa un email"
        ref={register({
          required: "Ingrese un Email",
          pattern: {
            value: EMAIL_FORMAT,
            message: "Ingrese un Email válido.",
          },
        })}
      />

      <FormInput
        name="password"
        safeable
        errors={errors}
        label="Contraseña"
        placeholder="******"
        ref={register({
          required: "Ingrese una contraseña",
          minLength: {
            value: 8,
            message: "Mínimo 8 caracteres.",
          },
          pattern: {
            value: PASSWORD_FORMAT,
            message:
              "Debe contener una letra mayúscula, una minúscula y un número. Sin espacios.",
          },
        })}
      />

      {/* <section className="form__input">
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
			</section> */}

      <Button className="button__register" fullWidth>
        {loading ? <Loader /> : "Registrarme"}
      </Button>
    </form>
  );
};
export default RegisterForm;
