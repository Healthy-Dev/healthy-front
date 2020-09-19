import { fakeHttpModule, TYPES } from "common/http";

export const postCard = ({ payload: { token, data } }) =>
	fakeHttpModule.post("v1/cards", token, data, TYPES.json);
