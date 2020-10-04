import { fakeHttpModule, TYPES } from "common/http";

export const getCards = () =>
	fakeHttpModule.get("v1/cards", undefined, undefined, TYPES.json);

export const editCard = ({ payload: { cardId, token, payload } }) =>
	fakeHttpModule.put(`v1/cards/${cardId}`, token, payload, TYPES.json);

export const deleteCard = ({ payload: { cardId, token } }) =>
	fakeHttpModule.delete(`v1/cards/${cardId}`, token);

export const getCard = ({ payload: { cardId } }) =>
	fakeHttpModule.get(`v1/cards/${cardId}`, undefined);

export const postCard = ({ payload: { token, data } }) =>
	fakeHttpModule.post("v1/cards", token, data, TYPES.json);

export const getCardsSearch = ({ payload: query }) =>
	fakeHttpModule.get(`v1/cards?search=${query}`, undefined);
