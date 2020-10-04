import React, { useState } from "react";
import "./index.scss";
import PropTypes from "prop-types";
import { changeState } from "libs/changeState";
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

	const [showAlert, setShowAlert] = useState(true);
	return (
		<>
			{showAlert && (
				<div className={finalClassName}>
					{showButtonClose && (
						<span className="alert__close" onClick={() => changeState(setShowAlert)}>
							<IconClose />
						</span>
					)}
					{children}
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
