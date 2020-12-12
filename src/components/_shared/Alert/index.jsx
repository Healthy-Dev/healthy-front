import React, { useState } from "react";
import "./index.scss";
import PropTypes from "prop-types";
import { ReactComponent as IconClose } from "assets/icons/x.svg";
import { ReactComponent as OKIcon } from "assets/icons/check.svg";
import { ReactComponent as ErrorIcon } from "assets/icons/alert-circle.svg";
import { useEffect } from "react";

const Alert = ({
	className = "",
	children = "Cambiar Relleno",
	error = false,
	success = false,
	confirm = false,
	showButtonClose = false,
	click = () => {},
}) => {
	let finalClassName = "alert ";
	error && (finalClassName += "alert__error ");
	success && (finalClassName += "alert__success ");
	confirm && (finalClassName += "alert__confirm ");
	finalClassName += className;

	const [showAlert, setShowAlert] = useState(true);

	function handleClick() {
		setShowAlert(false);
		click();
	}

	useEffect(() => {
		setTimeout(() => showAlert && handleClick(), 5000)
	}, [showAlert])

	return (
		<>
			{showAlert && (
				<div className={finalClassName}>
					{showButtonClose && (
						<span className="alert__close" onClick={handleClick}>
							<IconClose />
						</span>
					)}
					<p className="alert__msg">
						{error && <ErrorIcon />}
						{success && <OKIcon />}
						<span>{children}</span>
					</p>
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
