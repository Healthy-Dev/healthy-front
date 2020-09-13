import React, { useRef, useState } from "react";
// Styles
import "./index.scss";
// icons
import { ReactComponent as UploadIcon } from "assets/icons/upload.svg";
import { ReactComponent as CancelIcon } from "assets/icons/cancel-icon.svg";
import { ReactComponent as OkIcon } from "assets/icons/ok.svg";

const UploadImage = ({ photo, setPhoto, changePhoto }) => {
	const imgInput = useRef(null);
	const img = useRef(null);
	const [isUploading, setIsUploading] = useState(false);
	const [errorSize, setErrorSize] = useState(false);

	const updateImg = (event) => {
		const [file] = event.target.files;

		if (!file) return;

		setErrorSize(file.size > 10000 ? true : false);

		const reader = new FileReader();
		const { current } = img;

		current.file = file;

		reader.onload = (event) => {
			setPhoto(event.target.result);
			setIsUploading(false);
		};
		// TODO: hay que guardar `e.target.result` en el estado de la app para
		// conservar el data src de la imagen

		reader.readAsDataURL(file);
	};

	return (
		<div className="UploadImage">
			<div className="UploadImage__img">
				<img
					src={photo ? photo : changePhoto || "http://via.placeholder.com/80x80"}
					alt="card"
					ref={img}
				/>
			</div>

			<p>Elegí una imagen de portada</p>

			<div className="UploadImage__button">
				<button
					className={`upload-btn ${photo && "success"}`}
					onClick={() => imgInput.current.click()}
				>
					{isUploading && "Subiendo..."}
					{photo 
						?	<OkIcon /> 
						: <span> Subir Imagen <UploadIcon className="upload-icon" /></span>
					}
				</button>
				{photo && (
					<CancelIcon
						className="UploadImage__button--cancel"
						onClick={() => setPhoto(null)}
					/>
				)}
			</div>
			<input
				name="img"
				type="file"
				accept="image/*"
				onChange={updateImg}
				ref={imgInput}
				hidden
			/>
			{errorSize && photo && (
				<span className="UploadImage__error">
					¡Ps! La Imagen no puede pesar mas de 1Mb
				</span>
			)}
		</div>
	);
};

export default UploadImage;
