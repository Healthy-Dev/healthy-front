import { fakeHttpModule, TYPES } from "common/http";

export const postLogin = ({ payload }) =>
	fakeHttpModule.post("v1/auth/signin", null, payload, TYPES.json);

export const postRegister = ({ payload }) =>
	fakeHttpModule.post("v1/auth/signup", null, payload, TYPES.json);

export const verify = ({ payload: { token } }) =>
	fakeHttpModule.post(`v1/auth/verify/?token=${token}`, undefined, undefined, TYPES.json);
