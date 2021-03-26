import React from "react";
import "./index.scss";

const NotResults = () => {
  return <div className="notresults">
    <div className="notresults__grid">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p className="notresults__text">
      <span className="notresults__text--span">¡Ups!</span>
      No se encontraron resultados
    </p>
  </div>;
};

export default NotResults;
