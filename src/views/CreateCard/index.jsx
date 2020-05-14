import React from "react";
import AddCardButton from "components/CreateCard/AddCardButton";
import CreateCardForm from "components/CreateCard/CreateCardForm";
import UploadImage from "components/CreateCard/UploadImage";

const CreateCard = () => {
	return (
		<>
			<h1>Agregar articulo</h1>
			<UploadImage />
			<CreateCardForm />
			<AddCardButton />
		</>
	);
};

export default CreateCard;
