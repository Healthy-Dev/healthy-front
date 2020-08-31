import React, { useRef, useState } from "react";
// Styles
import "./index.scss";
// icons
import { ReactComponent as UploadIcon } from "assets/icons/upload.svg";
import { ReactComponent as CancelIcon } from "assets/icons/cancel-icon.svg";

const UploadImage = ({ photo, setPhoto, imageFileName, setImageFileName }) => {
	const imgInput = useRef(null);
	const img = useRef(null);
	const [isUploading, setIsUploading] = useState(false);
	const [progressAmount, setProgressAmount] = useState(0);
	const [isImageUploaded, setIsImageUploaded] = useState(false);

	const updateImg = (event) => {
		const [file] = event.target.files;

		if (!file) {
			return;
		}

		const reader = new FileReader();
		const { current } = img;

		current.file = file;

		reader.onload = (event) => {
			setPhoto(event.target.result);
			/* 			localStorage.setItem('uploadedImage', event.target.result) */
			const slicedImageName = current.file.name.slice(0, 10) + "...";
			const plainImageName = current.file.name;
			setImageFileName(plainImageName.length > 10 ? plainImageName : slicedImageName);
			setIsUploading(false);
			setIsImageUploaded(true);
			setProgressAmount(0);
		};
		// TODO: hay que guardar `e.target.result` en el estado de la app para
		// conservar el data src de la imagen

		reader.onprogress = function (data) {
			setIsUploading(true);
			if (data.lengthComputable) {
				const progress = parseInt((data.loaded / data.total) * 100, 10);
				setProgressAmount(progress);
			}
		};

		reader.readAsDataURL(file);
	};

	return (
		<div className="UploadImage">
			{isImageUploaded ? (
				<img src={photo} alt="card" ref={img} className="img" />
			) : (
				<img
					src="http://via.placeholder.com/80x80"
					alt="default"
					ref={img}
					className="img"
				/>
			)}

			<p>Elegí una imagen de portada</p>

			<button
				// TODO: Hay que hacer que el botton funcione como una barra de progreso.
				type="button"
				className={isUploading ? "upload-btn uploading" : "upload-btn pointer"}
				style={{ "--progress": progressAmount + "%" }}
				onClick={() => {
					imgInput.current.click();
				}}
			>
				{isUploading && "Subiendo..."}
				{!isUploading && !isImageUploaded && "Subir una imagen"}
				{isImageUploaded && imageFileName}
				{!isUploading && !isImageUploaded && <UploadIcon className="upload-icon" />}
				{!isUploading && isImageUploaded && (
					<CancelIcon className="cancel-icon pointer" />
					// TODO: Cancel image upload. Decide and apply if needed.
				)}
			</button>
			<input
				name="img"
				type="file"
				accept="image/*"
				onChange={updateImg}
				ref={imgInput}
				hidden
			/>
			{/* 			<span>¡Ps! La Imagen puede pesar hasta 1Mb</span> */}
		</div>
	);
};

export default UploadImage;
