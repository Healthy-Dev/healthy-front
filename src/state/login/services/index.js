import { fakeHttpModule, TYPES } from "common/http";

export const postLogin = ({ payload }) =>
	fakeHttpModule.post("v1/auth/signin", null, payload, TYPES.json);
