import React, { memo } from "react";
import "./styles.scss";
import { ReactComponent as IconBack } from "assets/icons/arrow-left.svg";
import { useHistory } from "react-router-dom";

const BackButton = () => {
  const { goBack } = useHistory();

  return (
    <button className="back" onClick={goBack}>
      <IconBack />
    </button>
  );
};

export default memo(BackButton);
