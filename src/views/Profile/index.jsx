import React, { useCallback, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

import { ReactComponent as CreateIcon } from "assets/icons/create.svg";
import { ReactComponent as BookMarkIcon } from "assets/icons/bookmark.svg";

import Layout from "components/_shared/Layout";
import Alert from "components/_shared/Alert";
import CardsList from "components/_shared/CardsList";

import { requestCardsByUserCreator } from "state/cards/actions";
import {
  getUserRequest,
  deleteUserData,
  hiddenMsgUser,
} from "state/user/actions";
import { userLogout } from "state/auth/actions";
import { FilterByUserCreator } from "state/cards/selectors";
import {
  UserSelector,
  MessageUserSelector,
  DeleteUserSelector,
  UpdateUserSelector,
} from "state/user/selectors";

import useAuth from "hooks/useAuth";
import { ContextModal } from "hooks/useModal";
import { ILikeContext } from "state/cardsILike";
import User from "components/Profile/User/User";
import CardsTitle from "components/Profile/CardsTitle";
import MoreOptions from "components/_shared/MoreOptions";

const Profile = ({ history }) => {
  const { replace } = history
  const { cardsILike, loading: loadingCardsILike } = useContext(ILikeContext);
  const { showComponent, showModal } = useContext(ContextModal);
  const { token, closeSession, isAuth } = useAuth();

  const dispatch = useDispatch();
  const { data: dataUser, error: errorUser } = useSelector((state) =>
    UserSelector(state),
  );
  const { data: cardsByCreator, loading: loadingCreator } = useSelector((state) =>
    FilterByUserCreator(state),
  );

  const { error: errorDeleteUser } = useSelector((state) => DeleteUserSelector(state));
  const { error: errorUpdateUser } = useSelector((state) => UpdateUserSelector(state));

  const { data: messageAlert } = useSelector((state) => MessageUserSelector(state));

  useEffect(() => {
    if (!isAuth) replace("/login");
  }, [isAuth, replace]);

  useEffect(() => {
    if (!dataUser) dispatch(getUserRequest({ token }));
  }, [dispatch, dataUser, token]);

  useEffect(() => {
    if (dataUser?.user && !cardsByCreator && !cardsByCreator?.length) {
      dispatch(requestCardsByUserCreator({ creatorId: dataUser?.user.id }));
    }
  }, [dataUser, cardsByCreator, dispatch]);

  function hiddenAlert() {
    dispatch(hiddenMsgUser());
  }

  const logout = useCallback(async () => {
    console.log('1')
    dispatch(userLogout());
    dispatch(deleteUserData());
    closeSession();
    setTimeout(() => {
      replace("/login");
    }, 500);
  }, [closeSession, dispatch, replace])

  const editProfile = useCallback(() => {
    console.log('1')
    showModal();
    showComponent("edit-profile");
  }, [showComponent, showModal])

  let optionsModalProfile = [
    { title: "Editar perfil", fn: editProfile },
    { title: "Cerrar Sesión", fn: logout },
  ];

  return (
    <Layout>
      {messageAlert && (
        <Alert
          click={hiddenAlert}
          error={errorUser || errorDeleteUser || errorUpdateUser}
          showButtonClose
          success={!errorUser && !errorDeleteUser && !errorUpdateUser}
        >
          {messageAlert}
        </Alert>
      )}
      <div className="profile">
        <MoreOptions optionsModal={optionsModalProfile} />
        <User dataUser={dataUser} optionsModal={optionsModalProfile} />

        <CardsTitle title="Tarjetas Guardadas" icon={BookMarkIcon} />
        <CardsList
          cards={cardsILike}
          userId={dataUser?.user.id}
          title="Guardadas"
          icon={BookMarkIcon}
          loading={loadingCardsILike}
        />

        <CardsTitle title="Tarjetas Creadas" icon={CreateIcon} />
        <CardsList
          cards={cardsByCreator}
          userId={dataUser?.user.id}
          title="Creadas"
          icon={CreateIcon}
          loading={loadingCreator}
        />
      </div>
    </Layout>
  );
};

export default Profile;
