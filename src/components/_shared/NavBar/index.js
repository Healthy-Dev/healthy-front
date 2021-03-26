import React, { useCallback } from "react";
import "./index.scss";
import { useLocation, useHistory } from "react-router-dom";

import { ReactComponent as HomeHeart } from "assets/icons/home.svg";
import { ReactComponent as Search } from "assets/icons/search.svg";
import { ReactComponent as UserIcon } from "assets/icons/user.svg";

const NavBar = ({ onClick }) => {
  const { pathname } = useLocation();
  const { push } = useHistory();

  const links = [
    { id: 0, path: "/", name: "Home", icon: HomeHeart },
    { id: 1, path: "/search", name: "Buscar", icon: Search },
    { id: 3, path: "/profile", name: "Perfil", icon: UserIcon },
  ];

  const Icons = ({ Icon, ...arg }) => <Icon {...arg} />;

  const handleNavigationButtonPress = useCallback((pathName) => push(pathName), [push])

  return (
    <nav className="navbar" onClick={onClick}>
      {links.map((link) => (
        <button
          key={link.id}
          className={`nav-bar-button ${pathname === link.path && "fill-yellow"}`}
          onClick={() => handleNavigationButtonPress(link.path)}>
          <Icons
            Icon={link.icon}
            className="nav-bar-icons"
          />
          <span>{link.name}</span>
        </button>
      ))
      }
    </nav >
  );
};

export default NavBar;
