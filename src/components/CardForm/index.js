import React, { useState, useEffect } from "react";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";

import { useDispatch, useSelector } from "react-redux";
import { requestGetCardsCategories } from "state/cards/actions";
import { GetCardsCategories } from "state/cards/selectors";

// Components
import UploadImage from "./UploadImage";
import MessageError from "./MessageError";
import Button from "components/_shared/Button";
import Loader from "components/_shared/Loader";

const CreateCardForm = ({ sendForm, loading, data }) => {
	const dispatch = useDispatch();
	const { data: categoriesData } = useSelector((state) => GetCardsCategories(state));

	let defaultValues = {
		title: data.title,
		description: data.description,
		externalUrl: data.externalUrl,
	};

	const { register, handleSubmit, errors } = useForm({ defaultValues });
	const [photo, setPhoto] = useState(null);
	const [sizeImg, setSizeImg] = useState(0);
	const isImgTooBig = sizeImg > 15 * 1024 * 1024;
	const formatPhoto = photo && photo.split("base64,")[1];

	const onSubmit = ({ title, description, externalUrl, category }) => {
		if (isImgTooBig) return;
		sendForm(
			JSON.stringify({
				title,
				description,
				photo: photo ? formatPhoto : undefined,
				externalUrl,
				categoryId: category,
			}),
		);
	};

	const URL_FORMAT = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

	useEffect(() => {
		if (!categoriesData) dispatch(requestGetCardsCategories());
	}, []); //eslint-disable-line

	return (
		<form className="CreateCardForm" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
				<select className="select" name="category" ref={register({ required: true })}>
					<option value={(data.category && data.category.id) || ""}>
						{(data.category && data.category.name) || "Categorias"}
					</option>
					{categoriesData &&
						categoriesData.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
				</select>
				{errors.category && errors.category.type === "required" && (
					<MessageError message="Seleccione una Categoria" />
				)}
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
			<section className="upload-form-container">
				<UploadImage
					photo={photo}
					changePhoto={data.photo}
					setPhoto={setPhoto}
					setSizeImg={setSizeImg}
					refForm={register}
				/>
				{photo && isImgTooBig && (
					<MessageError message="La imagen no puede pesar más de 15Mb" />
				)}
				<Button type="submit">
					{loading ? <Loader /> : data ? "Editar articulo" : "Agregar articulo"}
				</Button>
			</section>
		</form>
	);
};
export default CreateCardForm;
