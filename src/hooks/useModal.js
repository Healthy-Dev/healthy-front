import React, { createContext } from "react";
import { useState } from "react";

export const useModal = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	const hiddenModal = () => setModalOpen(false);
	const showModal = () => setModalOpen(true);

	return { isModalOpen, hiddenModal, showModal };
};

export const ContextModal = createContext(undefined);
const ModalContext = (props) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [id, setID] = useState(null);
	const [component, showComponent] = useState(null);
	const hiddenModal = () => setModalOpen(false);
	const showModal = () => setModalOpen(true);

	return (
		<ContextModal.Provider
			value={{ isModalOpen, hiddenModal, showModal, setID, id, showComponent, component }}
		>
			{props.children}
		</ContextModal.Provider>
	);
};

export default ModalContext;
