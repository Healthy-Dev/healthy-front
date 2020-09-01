import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const ModalOptions = ({ toggleModalConfirm }) => {
	return <section className="modal">
    <Link to="/edit">Editar</Link>
    <p onClick={() => toggleModalConfirm()}>Elimiar</p>
  </section>;
};

export default ModalOptions;
