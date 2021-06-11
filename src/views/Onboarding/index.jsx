import React from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";
import Button from "components/_shared/Button";
import RowImages from "components/_shared/RowImages";
import logo from "../../assets/img/Logo-Healthy-XL.png";

const Onboarding = () => {
  const history = useHistory();
  return (
    <div className="onboarding">
      <RowImages />
      <div className="onboarding__gradient" />
      <div className="onboarding__content">
        <div className="onboarding__content__textcontainer">
          <img height="100" alt="Healthy" width="361" src={logo} />

          <p className="onboarding__content--text">
            Construye nuevos hábitos para una vida más sana
          </p>
          <p className="onboarding__content--subtext">
            Crea, descubre y guarda tips sobre salud y bienestar.
          </p>
          <p className="onboarding__content--subtext">
            ¡Accedé a ellos cuando los necesites!
          </p>
          <Button
            className="onboarding__content--button button-main"
            onClick={() => history.push("/login")}
          >
            Comenzar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
