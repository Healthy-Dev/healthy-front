import React from "react";
// Styles
import "./index.scss";
import { Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { requestResetPassword } from "state/auth/actions";
import { resetPasswordSelector } from "state/auth/selectors";
import { useForm } from "react-hook-form";

import Button from "components/_shared/Button";
import Loader from "components/_shared/Loader";
import Alert from "components/_shared/Alert";
import FormInput from "components/_shared/FormInput";
import { ReactComponent as Logo } from "assets/img/logoM.svg";

const PASSWORD_FORMAT = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

const ResetPassword = ({ history }) => {
  const dispatch = useDispatch();
  const { data, loading, error, errorMsg } = useSelector((state) =>
    resetPasswordSelector(state),
  );
  const { search } = useLocation();
  const token = search.replace("?token=", "");
  const { register, handleSubmit, errors, watch } = useForm({
    mode: "all",
  });

  const onSubmit = ({ password }) => {
    dispatch(requestResetPassword({ token, password: JSON.stringify(password) }));
  };

  return (
    <div className="recover__pass">
      {error && (
        <Alert error showButtonClose>
          {errorMsg}
          <Link to="/recover_password" className="span">
            {" "}
            Enviar otra solicitud
          </Link>
        </Alert>
      )}
      <Logo />
      <section className="recover__card">
        <h2 className="recover__card--title">Recupera tu contraseña</h2>
        {data ? (
          <>
            <p className="recover__card--msg">{data?.message}</p>
            <Button onClick={() => history.push("/login")}>Iniciar Session</Button>
          </>
        ) : (
          <>
            <p className="recover__card--msg">
              Ingresa una nueva contraseña para tu cuenta
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                type="text"
                name="password"
                label="Nueva contraseña"
                errors={errors}
                safeable
                ref={register({
                  required: true,
                  pattern: {
                    value: PASSWORD_FORMAT,
                    message: "Al menos una mayúscula, una minúscula y un número.",
                  },
                })}
                placeholder="******"
              />
              <FormInput
                type="text"
                name="confirmPassword"
                label="Confirmar contraseña"
                errors={errors}
                ref={register({
                  required: true,
                  validate: (value) =>
                    value === watch("password") || "Las contraseñas no coinciden.",
                  pattern: {
                    value: PASSWORD_FORMAT,
                    message: "Al menos una mayúscula, una minúscula y un número.",
                  },
                })}
                placeholder="******"
              />
              <Button className="button-recover">
                {loading ? <Loader /> : "Guardar"}
              </Button>
            </form>
          </>
        )}
      </section>
    </div>
  );
};

export default ResetPassword;
