import React, { FC, useCallback, useState } from "react";
import { useLocation } from "react-router";
import ModalOptions from "../ModalOptions/ModalOptions";

export type OptionsModal = {
  title: string;
  fn: () => void;
};

type LinkButtonProps = {
  path: string;
  name: string;
  icon: any;
  onClickButton: () => void;
  modal?: boolean;
  optionModal: OptionsModal[];
};

const LinkButton: FC<LinkButtonProps> = ({
  path,
  name,
  icon: Icon,
  onClickButton,
  modal,
  optionModal,
}) => {
  const { pathname } = useLocation();
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  return (
    <>
      <button className={`link-button ${pathname === path ? "active" : ""}`}>
        {modal && <span className="block-button" onClick={toggleModal}></span>}
        <span onClick={onClickButton}>
          <Icon className="nav-bar-icons" />
          <span className="title">{name}</span>
        </span>
      </button>
      {modal && (
        <ModalOptions
          openModal={openModal}
          optionsModal={optionModal}
          className="profile-modal"
          closeModal={() => setOpenModal(false)}
        />
      )}
    </>
  );
};

export default LinkButton;
