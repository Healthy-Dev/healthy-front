import React from "react";
import "./index.scss";
import Logo from "assets/icons/Logo-heatlhy.svg";

const NavHome = () => {
	return (
		<nav className="nav">
			<img src={Logo} alt="logo" />
		</nav>
	);
};

export default NavHome;
