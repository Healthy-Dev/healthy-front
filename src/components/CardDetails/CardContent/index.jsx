import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { useHistory } from "react-router-dom";
import MoreOptions from "components/_shared/MoreOptions";

const CardContent = ({ title, id, description, toggleModalConfirm }) => {
	const history = useHistory();
	
	// Todo: [Crear una funcionalidad para eliminar tarjeta]
	// Todo: [Crear una funcionalidad para reportar la tarjeta]
	let optionsModal = [	
		{ title: "Editar", fn: () => history.push(`/edit-card/${id}`) },
		{ title: "Elimar", fn: () => toggleModalConfirm() },
		{ title: "Reportar", fn: () => console.log("report") },
	]

	return (
		<div className="card__content">
			<h4 className="card__content--title">{title}</h4>
			<section className="card__content--more">
				<div className="card__content--more-img">
					<img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"alt="profile" />
				</div>
				<h3 className="card__content--more-user">Mia Done</h3>
				<button className="card__content--more-button">Seguir</button>
				<div className="card__content--more-options">
					<MoreOptions optionsModal={optionsModal} />
				</div>
			</section>
			<p className="card__content--description">
				{description}
			</p>
		</div>
	);
};

CardContent.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	description: PropTypes.string,
	toggleModalConfirm: PropTypes.func
}

export default CardContent;
