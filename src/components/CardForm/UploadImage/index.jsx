import React, { useRef, useState } from "react";
// Styles
import "./index.scss";
// icons
import { ReactComponent as CancelIcon } from "assets/icons/x.svg";
import Loader from "components/_shared/Loader";

const UploadImage = ({ photo, setPhoto, setSizeImg, changePhoto, refForm }) => {
	const img = useRef(null);
	const [isUploading, setUploading] = useState(false);

	const updateImg = (event) => {
		const [file] = event.target.files;
		setUploading(true);

		if (!file) return;

		setSizeImg(file.size);

		const reader = new FileReader();
		const { current } = img;

		current.file = file;

		reader.onload = (event) => {
			setPhoto(event.target.result);
			setUploading(false);
		};
		// TODO: hay que guardar `e.target.result` en el estado de la app para
		// conservar el data src de la imagen

		reader.readAsDataURL(file);
	};

	return (
		<div className="UploadImage">
			<label htmlFor="img" className="UploadImage__img">
				<img
					src={
						photo ||
						changePhoto ||
						"https://www.minasjr.com.br/wp-content/themes/minasjr/images/placeholders/placeholder_large_dark.jpg"
					}
					alt="card"
					ref={img}
				/>
				{isUploading && <Loader className="UploadImage__loader" />}
			</label>
			{photo && (
				<CancelIcon className="UploadImage__cancel" onClick={() => setPhoto(undefined)} />
			)}
			<input
				id="img"
				name="img"
				type="file"
				accept="image/*"
				onChange={updateImg}
				ref={refForm}
				hidden
			/>
		</div>
	);
};

export default UploadImage;
