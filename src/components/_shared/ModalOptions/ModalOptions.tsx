import React, { FC, memo, useCallback, useEffect } from "react";
import { OptionsModal } from "../NavBar/LinkButton";
import "./styles.scss";

type ModalOptionsProps = {
  openModal: boolean;
  optionsModal: OptionsModal[];
  className?: string;
  closeModal: () => void;
};

const ModalOptions: FC<ModalOptionsProps> = ({
  optionsModal,
  className = "",
  openModal,
  closeModal,
}) => {
  useEffect(() => {
    const outModalFocus = (e: any) => {
      if (e.target.parentNode?.id !== "modal-options") {
        closeModal();
      }
    };

    document.body.addEventListener("click", outModalFocus);

    return () => document.body.removeEventListener("click", outModalFocus);
  }, [closeModal]);

  const handleItemOnClick = useCallback(
    async (callback) => {
      await callback();
      closeModal();
    },
    [closeModal],
  );

  return (
    <>
      {openModal && (
        <ul className={`more__modal ${className}`} id="modal-options">
          {optionsModal.map((option: OptionsModal, index: number) => (
            <li key={index} onClick={() => handleItemOnClick(option.fn)}>
              {option.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default memo(ModalOptions);
