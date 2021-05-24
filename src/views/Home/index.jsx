import React, { useEffect } from "react";
import "./index.scss";
import Imagen from "assets/img/card-home.jpg";

import Layout from "components/_shared/Layout";
import NavHome from "components/_shared/Logo";
import Alert from "components/_shared/Alert";
import CardsList from "components/_shared/CardsList";
import Loader from "components/_shared/Loader";

import { useDispatch, useSelector } from "react-redux";
import { requestGetCards, hiddenMsgAlert } from "state/cards/actions";
import { GetCardsSelector, hiddenMesgSelector } from "state/cards/selectors";
import { UserSelector } from "state/user/selectors";
import useAuth from "hooks/useAuth";

import Onboarding from "views/Onboarding";

const HomeView = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => GetCardsSelector(state));
  const { data: userData } = useSelector((state) => UserSelector(state));
  const { data: msg, error: errorMsg } = useSelector((state) =>
    hiddenMesgSelector(state),
  );

  const { isAuth } = useAuth();

  useEffect(() => {
    if (!data) dispatch(requestGetCards());
  }, [dispatch, data]); //eslint-disable-line

  function deleteMsg() {
    dispatch(hiddenMsgAlert());
  }

  if (!isAuth) {
    return <Onboarding />;
  }

  return (
    <Layout>
      {msg && (
        <Alert click={deleteMsg} error={errorMsg} success={!errorMsg} showButtonClose>
          {msg}
        </Alert>
      )}
      <div className="presentation">
        <img src={Imagen} alt="presentation" />
        <h2>Solo diviertete!</h2>
      </div>
      <div className="line"></div>
      <div className="logo-home">
        <NavHome />
      </div>
      <div className="home">
        {(loading || !userData) && <Loader center />}
        {data && userData && <CardsList cards={data} userId={userData?.user.id} />}
      </div>
    </Layout>
  );
};

export default HomeView;
