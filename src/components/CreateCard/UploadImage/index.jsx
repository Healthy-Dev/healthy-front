import React from "react";
// Styles
import "./index";

const UploadImage = () => {
	return (
		<div>
			<img src="http://via.placeholder.com/200x200" alt="Example image" />
			<p>Elegí una imagen de portada</p>
			<button>Subir una imagen</button>
			<p>¡Ps! La Imagen puede pesar hasta 1Mb</p>
		</div>
	);
};

export default UploadImage;
