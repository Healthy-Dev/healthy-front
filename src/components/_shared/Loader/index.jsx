import React from "react";
import { ReactComponent as LoaderIcon } from "assets/icons/loader.svg";
import "./index.scss";

export default function Loader({ className }) {
	return <LoaderIcon className={`loader-icon ${className}`} />;
}
