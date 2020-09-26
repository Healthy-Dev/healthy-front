import React, { useState } from "react";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";

// Components
import UploadImage from "./UploadImage";
import MessageError from "./MessageError";
import Button from "components/_shared/Button";
import Loader from "components/_shared/Loader";

const CreateCardForm = ({ sendForm, loading, data }) => {
	let defaultValues = {
		title: data.title,
		description: data.description,
		externalUrl: data.externalUrl,
	};

	const { register, handleSubmit, errors } = useForm({ defaultValues });
	const [photo, setPhoto] = useState(null);
	const [sizeImg, setSizeImg] = useState(undefined);
	const maxSize = 15 * 1024 * 1024;

	const onSubmit = ({ title, description, externalUrl }) => {
		if (sizeImg > maxSize) return;
		sendForm(
			JSON.stringify({
				title,
				description,
				photo: photo ? photo.split("base64,")[1] : undefined,
				externalUrl,
				categoryId: 3,
			}),
		);
	};

	const URL_FORMAT = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

	return (
		<form className="CreateCardForm" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
			<div className="upload-form-container">
				<UploadImage
					photo={photo}
					changePhoto={data.photo}
					setPhoto={setPhoto}
					setSizeImg={setSizeImg}
					refForm={register}
				/>
				{photo && sizeImg > maxSize && (
					<MessageError message="La imagen no puede pesar mas de 15Mb" />
				)}
			</div>

			<section className="input">
				<label>Título</label>
				<input
					name="title"
					placeholder="Ingresa un título"
					ref={register({ required: true, maxLength: 50 })}
				/>
				{errors.title && errors.title.type === "required" && (
					<MessageError message="Ingrese un Título" />
				)}
				{errors.title && errors.title.type === "maxLength" && (
					<MessageError message="Máximo 50 caracteres" />
				)}
			</section>

			<section className="input">
				<label>Categorías</label>
				<select className="select" name="categoria">
					<option>Rutinas</option>
					<option>Alimentacion</option>
					<option>Confort</option>
					<option>Salud mental</option>
				</select>
			</section>

			<section className="input">
				<label>Descripción</label>
				<textarea
					rows="5"
					name="description"
					placeholder="Explicá en que consiste el artículo"
					ref={register({ required: true, minLength: 100 })}
				></textarea>
				{errors.description && errors.description.type === "minLength" && (
					<MessageError message="Mínimo 100 caracteres" />
				)}
				{errors.description && errors.description.type === "required" && (
					<MessageError message="Ingrese una descripción" />
				)}
			</section>

			<section className="input">
				<label>URL</label>
				<input
					name="externalUrl"
					placeholder="Ingresa una URL"
					ref={register({ required: true, maxLength: 254, pattern: URL_FORMAT })}
				/>
				{errors.externalUrl && errors.externalUrl.type === "required" && (
					<MessageError message="Ingrese una Url" />
				)}
				{errors.externalUrl && errors.externalUrl.type === "maxLength" && (
					<MessageError message="Máximo 250 caracteres" />
				)}
				{errors.externalUrl && errors.externalUrl.type === "pattern" && (
					<MessageError message="Ingrese una Url válida" />
				)}
			</section>

			<Button type="submit">
				{loading ? <Loader /> : data ? "Editar articulo" : "Agregar articulo"}
			</Button>
		</form>
	);
};
export default CreateCardForm;
