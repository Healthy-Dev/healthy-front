import React from "react";
import NavHome from "components/_shared/Logo";
import NavBar from "components/_shared/NavBar";
import Title from "components/_shared/Title";
import "./styles.scss";

const Layout = ({ children, title }) => {
	return (
		<div className="layout">
			<section className="aside">
				<NavHome />
			</section>
			<main className="main">
				<Title title={title} />
				{children}
			</main>
			<NavBar />
		</div>
	);
};

export default Layout;
