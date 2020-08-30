import React from "react";
import PropTypes from "prop-types";

//styles
import "./index.scss";

const Button = ({
	className = "",
	disabled = false,
	outlined = false,
	error = false,
	succes = false,
	children,
	type,
	onClick = () => {},
}) => {
	let FinalClassName = "button ";
	disabled && (FinalClassName += "button-disabled ");
	outlined && (FinalClassName += "button-outlined ");
	error && (FinalClassName += "button-error ");
	succes && (FinalClassName += "button-succes ");
	FinalClassName += className;
	return (
		<button className={FinalClassName} type={type} onClick={onClick}>
			{children}
		</button>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	disabled: PropTypes.bool,
	outlined: PropTypes.bool,
	error: PropTypes.bool,
	succes: PropTypes.bool,
	children: PropTypes.string,
	type: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
