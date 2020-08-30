import React, { useState } from "react";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";

// Components
import AddCardButton from "components/CreateCard/AddCardButton";
import UploadImage from "components/CreateCard/UploadImage";
import MessageError from "../MessageError";

const CreateCardForm = ({ createCard, loading }) => {
	const { register, handleSubmit, errors } = useForm();
	const [photo, setPhoto] = useState(null);
	const [imageFileName, setImageFileName] = useState("");

	const onSubmit = async ({ title, description, externalUrl }) => {
		createCard(
			JSON.stringify({
				title,
				description,
				photo,
				externalUrl,
			}),
		);
	};

	const URL_FORMAT = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

	return (
		<form className="CreateCardForm" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
			<div className="upload-form-container">
				<UploadImage
					photo={photo}
					setPhoto={setPhoto}
					imageFileName={imageFileName}
					setImageFileName={setImageFileName}
				/>
			</div>

			<label>Título</label>
			<input
				className={errors.title && "error"}
				name="title"
				placeholder="Ingresa un título"
				ref={register({ required: true, maxLength: 50 })}
			/>
			{errors.title && errors.title.type === "required" && <MessageError message="Ingrese un Título" />}
			{errors.title && errors.title.type === "maxLength" && <MessageError message="Máximo 50 caracteres" />}

			<label>Categorías</label>
			<select className="select" name="categoria">
				<option>Rutinas</option>
				<option>Alimentacion</option>
				<option>Confort</option>
				<option>Salud mental</option>
			</select>

			<label>Descripción</label>
			<textarea 
				className={errors.title && "error"}
				rows="5"
				name="description"
				placeholder="Explicá en que consiste el artículo"
				ref={register({ required: true, minLength: 150 })}
			></textarea>
			{errors.description && errors.description.type === "minLength" && <MessageError message="Mínimo 150 caracteres" />}
			{errors.description && errors.description.type === "required" && <MessageError message="Ingrese una descripción" />}

			<label>URL</label>
			<input
				className={errors.externalUrl && "error"}
				name="externalUrl"
				placeholder="Ingresa una URL"
				ref={register({ required: true, maxLength: 254, pattern: URL_FORMAT })}
			/>
			{errors.externalUrl && errors.externalUrl.type === "required" &&<MessageError message="Ingrese una Url" />}
			{errors.externalUrl && errors.externalUrl.type === "maxLength" && <MessageError message="Máximo 250 caracteres" />}
			{errors.externalUrl && errors.externalUrl.type === "pattern" && <MessageError message="Ingrese una Url válida" />}

			<AddCardButton type="submit">
				{loading ? "Subiendo..." : "Agregar articulo"}
			</AddCardButton>
		</form>
	);
};
export default CreateCardForm;
