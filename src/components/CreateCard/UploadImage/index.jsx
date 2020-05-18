import React from "react";
// Styles
import "./index.scss";

const UploadImage = () => {
	return (
		<div className="upload-image-container">
			<img src="http://via.placeholder.com/80x80" alt="Example image" />
			<p>Elegí una imagen de portada</p>
			<button className="upload-image-button">Subir una imagen</button>
			<span>¡Ps! La Imagen puede pesar hasta 1Mb</span>
		</div>
	);
};

export default UploadImage;
