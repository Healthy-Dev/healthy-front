import React from "react";

//styles
import "./index.scss";

const Button = ({
	className = "",
	disabled = false,
	outlined = false,
	fullWidth = false,
	error = false,
	succes = false,
	children,
	onClick = () => {},
}) => {
	let FinalClassName = "button ";
	disabled && (FinalClassName += "button-disabled ");
	outlined && (FinalClassName += "button-outlined ");
	fullWidth && (FinalClassName += "button-fullWidth ");
	error && (FinalClassName += "button-error ");
	succes && (FinalClassName += "button-succes ");
	FinalClassName += className;
	return (
		<button className={FinalClassName} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
