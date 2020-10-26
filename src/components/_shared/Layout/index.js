import React, { useContext } from "react";
import NavHome from "components/_shared/Logo";
import NavBar from "components/_shared/NavBar";
import Title from "components/_shared/Title";
import "./styles.scss";
import { ContextModal } from "hooks/useModal";

import EditCard from "views/EditCard";
import EditProfile from "views/EditProfile";
import CreateCard from "views/CreateCard";

const Layout = ({ children, title }) => {
	const { isModalOpen, hiddenModal, id, component } = useContext(ContextModal);

	return (
		<div className="layout">
			<section className="aside">
				<NavHome />
			</section>
			<main className="main" style={isModalOpen ? whenModalIsOpen : null}>
				<Title title={title} />
				{children}
			</main>
			<NavBar onClick={hiddenModal} />
			{isModalOpen && (
				<div className="modals">
					<div className="modals__content">
						{component === "add-card" && <CreateCard />}
						{component === "edit-card" && <EditCard id={id} />}
						{component === "edit-profile" && <EditProfile id={id} />}
					</div>
				</div>
			)}
		</div>
	);
};

const whenModalIsOpen = {
	overflow: "hidden",
	height: "100vh",
};

export default Layout;
