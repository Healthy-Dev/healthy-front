import React from "react";
import PropTypes from "prop-types";

//styles
import "./index.scss";

const Button = ({
	className = "",
	disabled = false,
	outlined = false,
	error = false,
	success = false,
	children,
	type,
	onClick = () => {},
}) => {
	let FinalClassName = "button ";
	disabled && (FinalClassName += "button-disabled ");
	outlined && (FinalClassName += "button-outlined ");
	error && (FinalClassName += "button-error ");
	success && (FinalClassName += "button-success");
	FinalClassName += className;
	return (
		<button className={FinalClassName} disabled={disabled} type={type} onClick={onClick}>
			{children}
		</button>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	disabled: PropTypes.bool,
	outlined: PropTypes.bool,
	error: PropTypes.bool,
	success: PropTypes.bool,
	children: PropTypes.any,
	type: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
