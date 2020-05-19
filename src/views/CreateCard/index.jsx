import React from "react";

import CreateCardForm from "components/CreateCard/CreateCardForm";
import UploadImage from "components/CreateCard/UploadImage";
// Styles
import "./index.scss";

const CreateCard = () => {
	return (
		<div className="create-card-container">
			<h1>Agregar artículo</h1>
			<UploadImage />
			<CreateCardForm />
		</div>
	);
};

export default CreateCard;
