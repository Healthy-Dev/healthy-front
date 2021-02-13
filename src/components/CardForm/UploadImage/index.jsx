import React, { useCallback, useState } from "react";
// Styles
import "./index.scss";
// icons
import Loader from "components/_shared/Loader";
import MessageError from "../MessageError";
import { ReactComponent as UploadIcon } from "assets/icons/upload.svg";

const DEFAULT_IMAGE =
	"https://www.minasjr.com.br/wp-content/themes/minasjr/images/placeholders/placeholder_large_dark.jpg";

const UploadImage = ({
	name,
	photo,
	changePhoto,
	validateImage,
	error,
	setPhoto,
	isLargeImage,
}) => {
	const [sizeImg, setSizeImg] = useState(0);
	const [isUploading, setUploading] = useState(false);

	const handleChange = useCallback(
		(e) => {
			const reader = new FileReader();
			const [file] = e.target.files;

			if (!file) {
				return setPhoto(null);
			}

			setUploading(true);
			setSizeImg(file.size);

			reader.onload = (event) => {
				setPhoto(event.target.result);
				setUploading(false);
			};

			reader.readAsDataURL(file);
		},
		[setPhoto],
	);

	return (
		<div>
			<div className="UploadImage" role="button">
				<label htmlFor="img" className="UploadImage__img">
					<img src={photo || changePhoto || DEFAULT_IMAGE} alt="card" />
					{isUploading && <Loader className="UploadImage__loader" />}

					<UploadIcon className="iconUpload" />
				</label>

				<input
					id="img"
					name={name}
					type="file"
					accept="image/*"
					ref={validateImage}
					hidden
					onChange={handleChange}
				/>
			</div>

			{error && <MessageError message="Agregue una imagen" />}
			{isLargeImage(sizeImg) && (
				<MessageError message="La imagen no puede pesar más de 15Mb" />
			)}
		</div>
	);
};

export default UploadImage;
