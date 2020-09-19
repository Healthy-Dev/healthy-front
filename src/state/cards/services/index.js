import { fakeHttpModule } from "common/http";

export const getCards = () => fakeHttpModule.get("v1/cards", undefined);

export const deleteCard = ({ payload: { cardId, token } }) =>
	fakeHttpModule.delete(`v1/cards/${cardId}`, null, token);

export const editCard = ({ payload: { cardId, token, payload } }) =>
	fakeHttpModule.put(`v1/cards/${cardId}`, payload, token);
