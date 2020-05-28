import React, { useRef, useState } from "react";
// Styles
import "./index.scss";

const UploadImage = () => {
	const imgInput = useRef(null);
	const img = useRef(null);
	const [uploading, setUploading] = useState(false);
	const [progressAmount, setProgressAmount] = useState(0);

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
			setUploading(false);
			setProgressAmount(0);
		};
		// TODO: hay que guardar `e.target.result` en el estado de la app para
		// conservar el data src de la imagen

		reader.onprogress = function (data) {
			if (data.lengthComputable) {
				const progress = parseInt((data.loaded / data.total) * 100, 10);
				console.log(progress);
				setProgressAmount(progress);
			}
		};

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

			<button
				// TODO: Hay que hacer que el botton funcione como una barra de progreso.
				className={uploading ? "upload-btn uploading" : "upload-btn"}
				style={{ "--progress": progressAmount + "%" }}
				onClick={() => {
					imgInput.current.click();
					setUploading(true);
				}}
			>
				{uploading ? "Subiendo..." : "Subir una imagen"}
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
