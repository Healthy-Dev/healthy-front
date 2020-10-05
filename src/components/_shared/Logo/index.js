import React from "react";
import "./index.scss";
import { ReactComponent as Logo } from "assets/icons/Logo-heatlhy.svg";

const NavHome = () => {
	return (
		<nav className="nav">
			<Logo />
		</nav>
	);
};

export default NavHome;
