import React, { useEffect } from "react";
import registerBackground from "assets/img/bg-register.png";
import logoHealthy from "assets/icons/Logo-heatlhy.svg";
// Redux
import { useDispatch, useSelector } from "react-redux";

import { requestRegister, hiddenMsgAlert } from "state/auth/actions";
import { RegisterSelector, hiddenMsgAuthSelector } from "state/auth/selectors";
// Components
import RegisterForm from "components/Register";
import LinkButton from "components/Login/LinkButton";
// Icons
import { ReactComponent as FacebookIcon } from "assets/icons/facebook.svg";
import { ReactComponent as GoogleIcon } from "assets/icons/google.svg";
// Styles
import "./index.scss";
import useAuth from "hooks/useAuth";
import HealthyDev from "components/_shared/HealthyDev";
import RowImages from "components/_shared/RowImages";

const RegisterView = ({ history }) => {
  const { isAuth } = useAuth();
  const { loading, data } = useSelector((state) => RegisterSelector(state));
  const dispatch = useDispatch();

  const { data: message } = useSelector((state) => hiddenMsgAuthSelector(state));

  useEffect(() => {
    if (isAuth) history.replace("/");
  }, [isAuth]); //eslint-disable-line

  function sendFormRegister(dataUser) {
    dispatch(requestRegister(dataUser));
  }

  useEffect(() => {
    if (data) {
      setTimeout(() => history.replace("/user-created"), 2500);
    }
  }, [data]); //eslint-disable-line

  function hiddenAlert() {
    dispatch(hiddenMsgAlert());
  }

  let linkFacebook = "https://healthydev.herokuapp.com/v1/auth/facebook";
  let linkGoogle = "https://healthydev.herokuapp.com/v1/auth/google";

  return (
    <div className="register-wrapper">
      <RowImages />
      <div className="gradient" />
      <div className="register-container">
        <div className="register-form">
          <div className="desktop-title-wrapper">
            <h2 className="desktop-title">REGÍSTRATE</h2>
            <img className="desktop-logo" alt="logo" src={logoHealthy} />
          </div>
          <HealthyDev className="register-logo" top />
          <h2 className="mobile-title">REGÍSTRATE</h2>
          <RegisterForm sendFormRegister={sendFormRegister} loading={loading} />
          <div className="divider-form" />
          <LinkButton link={linkFacebook} icon={FacebookIcon} title="facebook" />
          <LinkButton link={linkGoogle} icon={GoogleIcon} title="google" />
        </div>
        <img src={registerBackground} className="register-img" alt="fondo" />
      </div>
    </div>
  );
};

export default RegisterView;
