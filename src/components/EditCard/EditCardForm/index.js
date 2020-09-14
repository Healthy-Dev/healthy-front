import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "components/_shared/Button";

const EditCardForm = ({ dataUser, sendForm }) => {
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

	const { register, handleSubmit } = useForm({ defaultValues });

	const onSubmit = ({ name, twitter, instagram }) => {
		sendForm(
			JSON.stringify({
				profilePhoto: profilePhoto || dataUser.user.profilePhoto,
				name,
				twitter,
				instagram,
				password: "",
			}),
		);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<img src={profilePhoto || dataUser.user.profilePhoto} alt="profile" />
				<label htmlFor="photo">Imagen</label>
				<input type="file" id="photo" name="photo" onChange={handleChange} />
			</div>
			<div>
				<label htmlFor="name">Nombre: </label>
				<input type="text" id="name" name="name" ref={register} />
			</div>
			<div>
				<label htmlFor="twitter">Twitter: </label>
				<input type="text" id="twitter" name="twitter" ref={register} />
			</div>
      <div>
				<label htmlFor="instagram">Instagram: </label>
				<input type="text" id="instagram" name="instagram" ref={register} />
			</div>
      <Button>
        Actualizar Datos
      </Button>
		</form>
	);
};

export default EditCardForm;
