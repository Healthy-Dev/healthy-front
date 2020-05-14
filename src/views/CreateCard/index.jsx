import React from "react";
import AddCardButton from "components/CreateCard/AddCardButton";
import CreateCardForm from "components/CreateCard/CreateCardForm";
import UploadImage from "components/CreateCard/UploadImage";
// Styles
import "./index.scss";

const CreateCard = () => {
	return (
		<div className="create-card-container">
			<h1>Agregar articulo</h1>
			<UploadImage />
			<CreateCardForm />
			<AddCardButton />
		</div>
	);
};

export default CreateCard;
