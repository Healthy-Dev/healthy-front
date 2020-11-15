import React from "react";
import "./index.scss";

export default function HealthyDev({ className, top }) {
	return (
		<div className={`healthy_dev ${className} ${top && "top"}`}>
			<span className="healthy">Healthy</span> <span className="dev">Dev</span>
		</div>
	);
}
