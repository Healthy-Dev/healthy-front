import React, { useState } from "react";
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

	const onSubmit = async ({ title, description, externalUrl }) => {
		const ENDPOINT_URL = process.env.REACT_APP_ENDPOINT_URL;
		const username = process.env.REACT_APP_USER;
		const password = process.env.REACT_APP_PASS;

		const url = `${ENDPOINT_URL}`;

		// Fetch to authenticate session. Temporary.
		// TODO: Remove this from the form to higher state.

		const loginOptions = {
			method: "POST",
			mode: "no-cors",
			body: {
				username,
				password,
			},
		};

		const response = await fetch(`${url}/login`, loginOptions);
		console.log(response);
		const { access_token, refresh_token } = await response.json();
		console.log(access_token, refresh_token);

		// Fetch to POST card data with authentication token

		const options = {
			method: "POST",
			mode: "no-cors",
			body: {
				title,
				description,
				photo,
				externalUrl,
			},
		};

		const dataResponse = await fetch(url, {
			...options,
			"X-Auth-Token": access_token,
		});
		const result = await dataResponse.json();
		console.log(result);
	};

	const URL_FORMAT = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

	return (
		<form className="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
			<div className="upload-form-container">
				<UploadImage photo={photo} setPhoto={setPhoto} />
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
