import React, { useState } from "react";
import "./index.scss";
import PropTypes from "prop-types";
import { ReactComponent as IconClose } from "assets/icons/x.svg";

const Alert = ({
	className = "",
	children = "Cambiar Relleno",
	error = false,
	success = false,
	confirm = false,
	showButtonClose = false,
}) => {
	let finalClassName = "alert ";
	error && (finalClassName += "alert__error ");
	success && (finalClassName += "alert__success ");
	confirm && (finalClassName += "alert__confirm ");
	finalClassName += className;

	const [content, setContent] = useState(children);
	const [showAlert, setShowAlert] = useState(true);

	function handleClick() {
		setContent("");
		setShowAlert(false);
	}

	return (
		<>
			{showAlert && (
				<div className={finalClassName}>
					{showButtonClose && (
						<span className="alert__close" onClick={handleClick}>
							<IconClose />
						</span>
					)}
					{content}
				</div>
			)}
		</>
	);
};

Alert.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
	error: PropTypes.bool,
	success: PropTypes.bool,
	confirm: PropTypes.bool,
	showButtonClose: PropTypes.bool,
};

export default Alert;
