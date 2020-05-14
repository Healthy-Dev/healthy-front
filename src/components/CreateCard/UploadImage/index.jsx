import React from "react";
// Styles
import "./index.scss";

const UploadImage = () => {
	return (
		<div className="upload-image-container">
			<img src="http://via.placeholder.com/80x80" alt="Example image" />
			<p>Elegí una imagen de portada</p>
			<button>Subir una imagen</button>
			<p>¡Ps! La Imagen puede pesar hasta 1Mb</p>
		</div>
	);
};

export default UploadImage;
