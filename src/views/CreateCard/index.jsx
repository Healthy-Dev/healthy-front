import React from "react";
import AddCardButton from "components/CreateCard/AddCardButton";
import CreateCardForm from "components/CreateCard/CreateCardForm";

const CreateCard = () => {
	return (
		<>
			<CreateCardForm />
			<AddCardButton />
		</>
	);
};

export default CreateCard;
