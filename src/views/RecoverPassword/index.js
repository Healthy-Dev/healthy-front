import React from "react";
// Styles
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { requestForgotPassword } from "state/auth/actions";
import { forgotPasswordSelector } from "state/auth/selectors";
import { useForm } from "react-hook-form";

import Button from "components/_shared/Button";
import Loader from "components/_shared/Loader";
import Alert from "components/_shared/Alert";
import BackButton from "components/_shared/BackButton/BackButton";
import FormInput from "components/_shared/FormInput";
import { ReactComponent as Logo } from "assets/img/logoM.svg";

const RecoverPassword = () => {
  const dispatch = useDispatch();
  const { data, loading, errorMsg, error } = useSelector((state) =>
    forgotPasswordSelector(state),
  );

  const EMAIL_FORMAT = /\S+@\S+\.\S+/;
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = ({ email }) => {
    dispatch(requestForgotPassword({ email: email }));
  };

  return (
    <div className="recover__pass">
      <BackButton />
      {error && (
        <Alert error showButtonClose>
          {errorMsg}
        </Alert>
      )}
      <Logo />

      <section className="recover__card">
        <h2 className="recover__card--title">Recupera tu contraseña</h2>
        {data ? (
          <p className="recover__card--msg">{data?.message}</p>
        ) : (
          <>
            <p className="recover__card--msg">
              Ingresa el email asociado a tu cuenta y te enviaremos un mensaje con un link
              para cambiar tu contraseña
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                name="email"
                type="email"
                label="Email"
                required
                placeholder="Ingrese su email"
                ref={register({
                  required: "Ingrese su email.",
                  pattern: {
                    value: EMAIL_FORMAT,
                    message: "Ingrese un email valido.",
                  },
                })}
                errors={errors}
              />

              <Button className="button-recover">
                {loading ? <Loader /> : "Enviar"}
              </Button>
            </form>
          </>
        )}
      </section>
    </div>
  );
};

export default RecoverPassword;
