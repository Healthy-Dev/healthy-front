import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import CardDetail from "components/CardDetails";
import Alert from "components/_shared/Alert";
import Layout from "components/_shared/Layout";
import Loader from "components/_shared/Loader";

import { useDispatch, useSelector } from "react-redux";
import {
  requestGetCard,
  requestLikedCards,
  requestDislikedCards,
  hiddenMsgAlert,
} from "state/cards/actions";
import { getUserRequest } from "state/user/actions";
import { requestDeleteCard } from "state/cards/actions";

import { GetCardSelector, hiddenMesgSelector } from "state/cards/selectors";
import { UserSelector } from "state/user/selectors";

import useAuth from "hooks/useAuth";

const CardDetailsView = () => {
  const [isILiked, setILiked] = useState(false);
  const dispatch = useDispatch();
  const { token } = useAuth();
  const { cardId } = useParams();

  const { data: msg, error: errorMsg } = useSelector((state) =>
    hiddenMesgSelector(state),
  );

  function deleteMsg() {
    dispatch(hiddenMsgAlert());
  }

  const {
    data: cardData,
    loading: cardLoading,
    likesCount,
    isLikedByMe,
  } = useSelector((state) => GetCardSelector(state));

  const { data: userData } = useSelector((state) => UserSelector(state));

  useEffect(() => {
    if (!cardData || cardData.id !== +cardId) dispatch(requestGetCard({ cardId }));
    if (!userData) dispatch(getUserRequest({ token }));

    if (userData && isLikedByMe !== undefined) {
      setILiked(isLikedByMe(userData.user.id));
    }
  }, [dispatch, cardData, userData]); //eslint-disable-line

  function isYourCard() {
    if (cardData && userData) {
      return cardData.creator.id === userData.user.id;
    }
  }

  function deleteCard() {
    dispatch(requestDeleteCard({ cardId, token }));
  }

  const iLiked = () => {
    dispatch(requestLikedCards({ idCard: cardId, token }));
    setILiked(true);
  };

  const disLiked = () => {
    dispatch(requestDislikedCards({ idCard: cardId, token }));
    setILiked(false);
  };

  return (
    <Layout backButton>
      <div className="card__detail">
        {msg && (
          <Alert click={deleteMsg} error={errorMsg} success={!errorMsg} showButtonClose>
            {msg}
          </Alert>
        )}
        {cardLoading && <Loader center />}

        {cardData && (
          <CardDetail
            data={cardData}
            isYourCard={isYourCard}
            deleteCard={deleteCard}
            isILiked={isILiked}
            likesCount={likesCount}
            iLiked={iLiked}
            disLiked={disLiked}
          />
        )}
      </div>
    </Layout>
  );
};

export default CardDetailsView;
