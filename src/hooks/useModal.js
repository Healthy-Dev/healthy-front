import React, { createContext } from "react";
import { useState } from "react";

export const ContextModal = createContext(undefined);
const ModalContext = (props) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [id, setID] = useState(null);
	const [component, showComponent] = useState(null);
	const [extra, setExtra] = useState(null);
	const hiddenModal = () => setModalOpen(false);
	const showModal = () => {
		setModalOpen(true);
	};

	return (
		<ContextModal.Provider
			value={{
				isModalOpen,
				hiddenModal,
				showModal,
				setID,
				id,
				showComponent,
				component,
				setExtra,
				extra,
			}}
		>
			{props.children}
		</ContextModal.Provider>
	);
};

export default ModalContext;
