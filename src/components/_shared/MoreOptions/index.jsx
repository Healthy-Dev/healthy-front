import React, { useState } from "react";
import "./index.scss";
import { ReactComponent as MoreIcon } from "assets/icons/more-vert.svg";
import ModalOptions from "../ModalOptions/ModalOptions";

const MoreOptions = ({ optionsModal }) => {
  const [showModal, setShowModal] = useState(false);

  // const handleClick = useCallback(async (callback) => {
  //   await callback();
  //   setShowModal(false);
  // }, [])

  return (
    <>
      <div className="more" onClick={() => setShowModal(prev => !prev)}>
        <MoreIcon className="more__icon" />
      </div>
      <ModalOptions
        openModal={showModal}
        closeModal={() => setShowModal(false)}
        optionsModal={optionsModal}
      />
    </>
  );
};

export default MoreOptions;
