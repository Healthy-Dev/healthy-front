import React, { useState } from "react";
import "./index.scss";

import { useForm } from "react-hook-form";

import { ReactComponent as IconUploadedImg } from "assets/icons/upload.svg";
import Button from "components/_shared/Button";
import MessageError from "components/CardForm/MessageError";
import Loader from "components/_shared/Loader";

const EditCardForm = ({ dataUser, sendForm, loading }) => {
	const [profilePhoto, setProfilePhoto] = useState(undefined);

	let reader = new FileReader();

	function handleChange(e) {
		const [File] = e.target.files;
		if (!File) return;

		reader.onload = (e) => {
			setProfilePhoto(e.target.result);
		};
		reader.readAsDataURL(File);
	}

	let defaultValues = {
		name: dataUser.user.name,
		twitter: dataUser.user.twitter,
		instagram: dataUser.user.instagram,
	};

	const { register, handleSubmit, errors } = useForm({ defaultValues });

	const onSubmit = ({ name, twitter, instagram }) => {
		sendForm(
			JSON.stringify({
				profilePhoto: profilePhoto ? profilePhoto.split("base64,")[1] : undefined,
				name,
				twitter,
				instagram,
			}),
		);
	};

	const URL_FORMAT = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

	return (
		<>
			<form className="editProfile__form" onSubmit={handleSubmit(onSubmit)}>
				<div className="flex-img">
					<section className="editProfile__form--input">
						<label htmlFor="photo" className="img">
							<img src={profilePhoto || dataUser.user.profilePhoto} alt="profile" />
							<IconUploadedImg className="icon" />
						</label>
						<input type="file" id="photo" name="photo" onChange={handleChange} />
					</section>
					<section className="editProfile__form--input">
						{/* <label htmlFor="name">Nombre: </label> */}
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Nombre"
							ref={register({ required: true })}
						/>
						{errors.name && <MessageError message="Ingrese su Nombre" />}
					</section>
				</div>

				<section className="editProfile__form--input">
					{/* <label htmlFor="twitter">Twitter: </label> */}
					<input
						type="text"
						id="twitter"
						name="twitter"
						placeholder="https://www.twitter.com/"
						ref={register({ pattern: URL_FORMAT })}
					/>
					{errors.twitter && <MessageError message="Ingrese una Url válida" />}
				</section>

				<section className="editProfile__form--input">
					{/* <label htmlFor="instagram">Instagram: </label> */}
					<input
						type="text"
						id="instagram"
						name="instagram"
						placeholder="https://www.instagram.com/"
						ref={register({ pattern: URL_FORMAT })}
					/>
					{errors.instagram && <MessageError message="Ingrese una Url válida" />}
				</section>

				<Button>{loading ? <Loader /> : "Actualizar Datos"}</Button>
			</form>
		</>
	);
};

export default EditCardForm;
