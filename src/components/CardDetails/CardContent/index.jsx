import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { useHistory } from "react-router-dom";
import MoreOptions from "components/_shared/MoreOptions";

const CardContent = ({
	photo,
	title,
	id,
	externalUrl,
	description,
	category,
	creatorInfo,
	createdAt,
	toggleModalConfirm,
	isYourCard,
}) => {
	const history = useHistory();

	// Todo: [Crear una funcionalidad para reportar la tarjeta]
	const editData = {
		photo,
		title,
		id,
		description,
		externalUrl,
		category,
	};

	let optionsModalCreator = [
		{ title: "Editar", fn: () => history.push(`/edit-card/${id}`, editData) },
		{ title: "Elimar", fn: () => toggleModalConfirm() },
		{ title: "Reportar", fn: () => console.log("report") },
	];

	let optionsModalDefault = [{ title: "Reportar", fn: () => console.log("report") }];

	return (
		<div className="card__content">
			<h4 className="card__content--title">{title}</h4>
			<section className="card__content--more">
				<div className="card__content--more-img">
					<img src={creatorInfo.profilePhoto} alt="profile" />
				</div>
				<h3 className="card__content--more-user">{creatorInfo.name}</h3>
				<button className="card__content--more-button">Seguir</button>
				<div className="card__content--more-options">
					<MoreOptions
						optionsModal={isYourCard() ? optionsModalCreator : optionsModalDefault}
					/>
				</div>
			</section>
			<p className="card__content--date">{createdAt}</p>
			<p className="card__content--description">{description}</p>
		</div>
	);
};

CardContent.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	description: PropTypes.string,
	creatorInfo: PropTypes.object,
	createdAt: PropTypes.string,
	toggleModalConfirm: PropTypes.func,
	isYourCard: PropTypes.func,
};

export default React.memo(CardContent);
