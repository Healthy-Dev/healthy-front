import React from "react";
import "./index.scss";
import { ReactComponent as IconMore } from "assets/icons/more-vert.svg";

const CardContent = ({ title, description }) => (
	<div className="card__content">
		<h4 className="card__content--title">Rutinas de running para la mañana {title}</h4>
		<section className="card__content--more">
			<div className="card__content--more-img">
				<img
					src="https://lh3.googleusercontent.com/proxy/i1M2VeGkJDgq-YWNo-qkzVnL5cRv7KVfDhCwgLHSB_4TDvW5ncJ1iW5fkfugC5-EmiE2fcAk_3-5dASJjIIYcjRlHjxAn8nfxnB_DjrfOtG9SKrP36M9ZzywEyGh1Fk2JxpE"
					alt="profile"
				/>
			</div>
			<h3 className="card__content--more-user">Mia Done</h3>
			<button className="card__content--more-button">Seguir</button>
			<span className="card__content--more-options">
				<IconMore />
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
