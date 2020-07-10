import { fakeHttpModule, TYPES } from "common/http";

export const postCard = ({ payload }) =>
	fakeHttpModule.post("v1/cards", null, payload, TYPES.json);
