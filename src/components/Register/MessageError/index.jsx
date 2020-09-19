import React from "react";
import "./index.scss";

const MessageError = ({ message }) => {
	return <p className="message__error">{message}</p>;
};

export default MessageError;
