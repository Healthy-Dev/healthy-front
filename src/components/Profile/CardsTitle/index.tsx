import React, { FC } from "react";
import "./styles.scss";

type CardTitleProps = {
  title: string;
  icon?: any;
};

const CardTitle: FC<CardTitleProps> = ({ title, icon: Icon }) => (
  <h2 className="cards__title">
    <Icon />
    <span>{title}</span>
  </h2>
);

export default CardTitle;
