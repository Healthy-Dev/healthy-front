import React, { useContext } from "react";
import NavHome from "components/_shared/Logo";
import NavBar from "components/_shared/NavBar";
import Title from "components/_shared/Title";
import "./styles.scss";
import { ContextModal } from "hooks/useModal";
import EditCard from "views/EditCard";
import EditProfile from "views/EditProfile";

const Layout = ({ children, title }) => {
	const { isModalOpen, hiddenModal, id, component } = useContext(ContextModal);

	const renderComponet = {
		"edit-card": () => <EditCard id={id} />,
		"add-card": () => <EditCard id={id} />,
		"edit-profile": () => <EditProfile id={id} />,
	};

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
					<div className="modals__content">{renderComponet[component]}</div>
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
