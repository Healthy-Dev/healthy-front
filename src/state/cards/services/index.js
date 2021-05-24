import { fakeHttpModule, TYPES } from "common/http";

export const getCards = () =>
  fakeHttpModule.get(
    "v1/cards?offset=0&limit=200&expand=creator,likes",
    undefined,
    undefined,
    TYPES.json,
  );

export const editCard = ({ payload: { cardId, token, payload } }) =>
  fakeHttpModule.put(`v1/cards/${cardId}`, token, payload, TYPES.json);

export const deleteCard = ({ payload: { cardId, token } }) =>
  fakeHttpModule.delete(`v1/cards/${cardId}`, token);

export const getCard = ({ payload: { cardId } }) =>
  fakeHttpModule.get(`v1/cards/${cardId}`, undefined);

export const postCard = ({ payload: { token, data } }) =>
  fakeHttpModule.post("v1/cards", token, data, TYPES.json);

export const getCardsSearch = ({ payload: query }) =>
  fakeHttpModule.get(
    `v1/cards?offset=2&limit=50&expand=creator,likes&search=${query}`,
    undefined,
  );

export const postlikes = ({ payload: { idCard, token } }) => {
  return fakeHttpModule.post(`v1/cards/${idCard}/like`, token, undefined);
};

export const deleteLike = ({ payload: { idCard, token } }) =>
  fakeHttpModule.delete(`v1/cards/${idCard}/like`, token);

export const filterCardsByCategory = ({ payload: categoryId }) =>
  fakeHttpModule.get(
    `v1/cards?offset=2&limit=50&expand=creator,likes&categoryId=${categoryId}`,
    undefined,
  );

export const getCardsCategories = () =>
  fakeHttpModule.get("v1/cards/categories", undefined, undefined, TYPES.json);

export const filterCardsByUserCreator = ({ payload: { creatorId } }) =>
  fakeHttpModule.get(
    `v1/cards?offset=1&limit=15&expand=creator,likes&creatorId=${creatorId}`,
    undefined,
    undefined,
    TYPES.json,
  );
