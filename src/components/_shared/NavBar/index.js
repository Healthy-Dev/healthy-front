import React, { useCallback } from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";

import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as UserIcon } from "assets/icons/user.svg";

import CreateCardButton from "./CreateCardButton";
import LinkButton from "./LinkButton";

const NavBar = () => {
  const { push } = useHistory();

  const handleNavigationButtonPress = useCallback((pathName) => push(pathName), [push])

  return (
    <nav className="navbar">
      <LinkButton
        path="/"
        name="Inicio"
        icon={HomeIcon}
        onClickButton={() => handleNavigationButtonPress('/')}
      />
      <LinkButton
        path="/search"
        name="Buscar"
        icon={SearchIcon}
        onClickButton={() => handleNavigationButtonPress('search')}
      />
      <CreateCardButton />
      <LinkButton
        path="/profile"
        name="Perfil"
        icon={UserIcon}
        onClickButton={() => handleNavigationButtonPress('profile')}
      />
    </nav >
  );
};

export default NavBar;
