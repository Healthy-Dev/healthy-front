import React, { useCallback, useContext } from "react";
import { ReactComponent as IconAdd } from "assets/icons/plus.svg";
import { ContextModal } from "hooks/useModal";

const CreateCardButton = () => {
  const { showComponent, showModal } = useContext(ContextModal);

  const showModalCreateCard = useCallback(() => {
    showComponent("add-card");
    showModal();
  }, [showModal, showComponent])

  return (
    <button className="btn-create" onClick={showModalCreateCard}>
      <IconAdd />
    </button>
  );
};

export default CreateCardButton;
