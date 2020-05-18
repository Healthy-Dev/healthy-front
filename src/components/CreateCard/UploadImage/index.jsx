import React from "react";
// Styles
import "./index.scss";

const UploadImage = () => {
	return (
		<div className="upload-image-container">
				<img src="http://via.placeholder.com/80x80" alt="Example image" />
				<div className="button-wrapper">
					<p>Elegí una imagen de portada</p>
					<button className="upload-image-button">Subir una imagen</button>
					{/* <p>¡Ps! La Imagen puede pesar hasta 1Mb</p>				 */}
				</div>
		</div>
	);
};

export default UploadImage;
