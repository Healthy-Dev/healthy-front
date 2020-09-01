import React from "react";
import "./index.scss";
import { ReactComponent as IconMore } from "assets/icons/more-vert.svg";
import ModalOptions from "../ModalOptions";

const CardContent = ({ title, description, showModal, toggleModalOptions, toggleModalConfirm }) => (
	<div className="card__content">
		<h4 className="card__content--title">Rutinas de running para la mañana {title}</h4>
		<section className="card__content--more">
			<div className="card__content--more-img">
				<img
					src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
					alt="profile"
				/>
			</div>
			<h3 className="card__content--more-user">Mia Done</h3>
			<button className="card__content--more-button">Seguir</button>
			<span className="card__content--more-options">
				<IconMore onClick={toggleModalOptions} />
				{showModal && <ModalOptions toggleModalConfirm={toggleModalConfirm} />}
			</span>
		</section>
		<p className="card__content--description">
			Practicar running es una de las actividades más recomendadas para el día a día.
			Puedes realizarla a cualquier hora del día y marcarte tus propios objetivos. Sin
			necesidad de gimnasios, salir a correr mejora tus competencias físicas al aire
			libre.
			{description}
		</p>
	</div>
);

export default CardContent;
