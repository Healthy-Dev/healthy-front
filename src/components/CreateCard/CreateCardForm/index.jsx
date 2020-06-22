import React, { useState, useEffect } from "react";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestCreateCard } from "state/createCard/actions";
// Selectors
import { CreateCardSelector } from "state/createCard/selectors";
// Components
import AddCardButton from "components/CreateCard/AddCardButton";
import UploadImage from "components/CreateCard/UploadImage";

const CreateCardForm = () => {
	const { register, handleSubmit, errors } = useForm();
	const [photo, setPhoto] = useState(null);
	const [imageFileName, setImageFileName] = useState("");
	const [payload, setPayload] = useState(null);

	// Redux
	const d = useDispatch();
	const { data, loading, error } = useSelector((state) => CreateCardSelector(state));

	useEffect(() => {
		d(requestCreateCard(payload));
	}, [d, payload]);

	useEffect(() => {
		if (error) console.log("ups la cagamos con algo");
		if (loading) console.log("estamos esperando que termine la request :D");
		if (!loading) console.log("ya no estamos esperando (?)");
		if (data) console.log("desde backed me llego esto:", data);
	}, [data, loading, error]);

	const onSubmit = async ({ title, description, externalUrl }) => {
		setPayload(
			JSON.stringify({
				title,
				description,
				photo,
				externalUrl,
			}),
		);
	};

	const URL_FORMAT = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

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
				name="title"
				placeholder="Ingresa un título"
				ref={register({ required: true, maxLength: 30 })}
			/>
			{errors.title && errors.title.type === "required" && <p>This field is required</p>}
			{errors.title && errors.title.type === "maxLength" && <p>Max length is 30</p>}

			<label>Descripción</label>
			<input
				name="description"
				placeholder="Explicá en que consiste el artículo"
				ref={register({ required: true, maxLength: 200 })}
			/>
			{errors.description && <p>This field is required</p>}
			{errors.description && errors.description.type === "maxLength" && (
				<p>Max length is 200</p>
			)}

			<label>URL</label>
			<input
				name="externalUrl"
				placeholder="Ingresa una URL"
				ref={register({ required: true, maxLength: 254, pattern: URL_FORMAT })}
			/>

			{errors.externalUrl && errors.externalUrl.type === "required" ? (
				<p className="tooltip">This field is required</p>
			) : (
				""
			)}
			{errors.externalUrl && errors.externalUrl.type === "maxLength" ? (
				<p className="tooltip">Max length is 254</p>
			) : (
				""
			)}
			{errors.externalUrl && errors.externalUrl.type === "pattern" ? (
				<p className="tooltip">This must be a URL</p>
			) : (
				""
			)}

			<AddCardButton />
		</form>
	);
};
export default CreateCardForm;
