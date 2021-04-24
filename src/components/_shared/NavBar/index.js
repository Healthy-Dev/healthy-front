import React, { useCallback, useContext } from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as UserIcon } from "assets/icons/user.svg";

import { userLogout } from "state/auth/actions";
import { deleteUserData } from "state/user/actions";

import useAuth from "hooks/useAuth";
import { ContextModal } from "hooks/useModal";

import CreateCardButton from "./CreateCardButton";
import LinkButton from "./LinkButton";

const NavBar = () => {
  const { push, replace } = useHistory();
  const { closeSession } = useAuth();
  const { showComponent, showModal } = useContext(ContextModal);
  const dispatch = useDispatch();

  const handleNavigationButtonClick = useCallback((pathName) => {
    push(pathName)
  }, [push])

  const logout = useCallback(async () => {
    dispatch(userLogout());
    dispatch(deleteUserData());
    closeSession();
    setTimeout(() => {
      replace("/login");
    }, 500);
  }, [replace, dispatch, closeSession])

  const editProfile = useCallback(() => {
    showModal();
    showComponent("edit-profile");
  }, [showComponent, showModal])

  const goToProfile = useCallback(() => {
    push('/profile')
  }, [push])

  const OPTIONS_MODAL = [
    { title: "Ver perfil", fn: goToProfile },
    { title: "Editar perfil", fn: editProfile },
    { title: "Cerrar sesión", fn: logout },
  ];

  return (
    <nav className="navbar">
      <section className="navbar__top">
        <LinkButton
          path="/"
          name="Inicio"
          icon={HomeIcon}
          onClickButton={() => handleNavigationButtonClick('/')}
        />
        <LinkButton
          path="/search"
          name="Buscar"
          icon={SearchIcon}
          onClickButton={() => handleNavigationButtonClick('/search')}
        />
      </section>
      <section className="navbar__bottom navbar__bottom--profile">
        <CreateCardButton />
        <LinkButton
          modal
          optionModal={OPTIONS_MODAL}
          path="/profile"
          name="Perfil"
          icon={UserIcon}
          onClickButton={() => handleNavigationButtonClick('/profile')}
        />
      </section>
    </nav >
  );
};

export default NavBar;
