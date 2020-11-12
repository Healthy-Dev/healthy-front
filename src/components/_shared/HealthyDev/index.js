import React from "react";
import "./index.scss";

export default function HealthyDev({ className }) {
	return (
		<div className={`healthy_dev ${className}`}>
			<span className="healthy">Healthy</span> <span className="dev">Dev</span>
		</div>
	);
}
