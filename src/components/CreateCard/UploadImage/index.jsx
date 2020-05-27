import React, { useRef } from "react";
// Styles
import "./index.scss";

const UploadImage = () => {
	const imgInput = useRef(null);
	const img = useRef(null);

	const updateImg = (event) => {
		const [file] = event.target.files;

		if (!file) {
			return;
		}

		const reader = new FileReader();
		const { current } = img;

		current.file = file;

		reader.onload = (event) => {
			current.src = event.target.result;
			/* 			localStorage.setItem('uploadedImage', event.target.result) */
		};
		// TODO: hay que guardar `e.target.result` en el estado de la app para
		// conservar el data src de la imagen

		reader.readAsDataURL(file);
	};

	return (
		<div className="upload-image-container">
			<img
				src="http://via.placeholder.com/80x80"
				alt="Example image"
				ref={img}
				className="img"
			/>

			<p>Elegí una imagen de portada</p>

			<button className="upload-image-button" onClick={() => imgInput.current.click()}>
				Subir una imagen
			</button>

			<input
				name="img"
				type="file"
				accept="image/*"
				onChange={updateImg}
				ref={imgInput}
				hidden
			/>

			<span>¡Ps! La Imagen puede pesar hasta 1Mb</span>
		</div>
	);
};

export default UploadImage;
