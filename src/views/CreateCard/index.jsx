import React from "react";

import CreateCardForm from "components/CreateCard/CreateCardForm";

// Styles
import "./index.scss";

const CreateCardView = () => {
	return (
		<div className="create-card-container">
			<h1>Agregar artículo</h1>

			<CreateCardForm />
		</div>
	);
};

export default CreateCardView;
