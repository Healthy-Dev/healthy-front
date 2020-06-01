import React, { useState, useEffect } from "react";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";
// Components
import AddCardButton from "components/CreateCard/AddCardButton";
import UploadImage from "components/CreateCard/UploadImage";

const CreateCardForm = () => {
	const { register, handleSubmit, errors } = useForm();
	const [photo, setPhoto] = useState(null);
	const [imageFileName, setImageFileName] = useState("");
	const [photoBlob, setPhotoBlob] = useState("");

	useEffect(() => {
		async function base64toblob() {
			const request = await fetch(photo);
			const blob = await request.blob();
			setPhotoBlob(blob);
			console.log(blob);
		}
		base64toblob();
	}, [photo]);

	const onSubmit = async ({ title, description, externalUrl }) => {
		const ENDPOINT_URL = process.env.REACT_APP_ENDPOINT_URL;

		const token = process.env.REACT_APP_TOKEN;
		const url = `${ENDPOINT_URL}/api/post`;

		const createDataObject = () => {
			let formData = new FormData();
			formData.append("title", title);
			formData.append("description", description);
			formData.append("photo", photoBlob, imageFileName);
			formData.append("externalUrl", externalUrl);
			const checkForm = formData.values();
			for (const value of checkForm) {
				console.log(value);
			}
			return formData;
		};

		// TODO: Remove this from the form to higher state

		// Fetch to POST card data with authentication token

		const options = {
			method: "POST",
			crossDomain: true,
			mode: "no-cors",
			headers: {
				Accept: "multipart/form-data",
				"X-Auth-Token": token,
			},
			body: createDataObject(),
		};
		console.log(options);

		try {
			const dataResponse = await fetch(url, options);
			console.log(dataResponse);
			const result = await dataResponse.json();
			console.log(dataResponse);
			return result;
		} catch (err) {
			console.error(err);
		}
	};

	const URL_FORMAT = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

	return (
		<form className="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
