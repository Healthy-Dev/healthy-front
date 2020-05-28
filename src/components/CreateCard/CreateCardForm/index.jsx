import React from "react";
// Hooks
import { useForm } from "react-hook-form";
// Styles
import "./index.scss";
// Components
import AddCardButton from "components/CreateCard/AddCardButton";

const CreateCardForm = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = async ({ title, description, externalUrl }) => {
/* 		const ENDPOINT_URL = process.env.REACT_APP_ENDPOINT_URL;
		const CORS = "https://max-cors-anywhere.herokuapp.com/"; */
		const options = {
			method: "POST",
			body: {
				title,
				description,
				photo: "photo",
				externalUrl,
			},
		};
		console.log(options);
		/* 		const response = await fetch(
			`https://www.mocky.io/v2/5185415ba171ea3a00704eed`,
			options,
		);

		const result = await response.json();
		console.log(result); */
	};

	const URL_FORMAT = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
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
				<p>This field is required</p>
			) : (
				""
			)}
			{errors.externalUrl && errors.externalUrl.type === "maxLength" ? (
				<p>Max length is 254</p>
			) : (
				""
			)}
			{errors.externalUrl && errors.externalUrl.type === "pattern" ? (
				<p>This must be a URL</p>
			) : (
				""
			)}

			<AddCardButton />
		</form>
	);
};

export default CreateCardForm;
