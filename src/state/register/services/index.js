import { fakeHttpModule, TYPES } from "common/http";

export const postRegister = ({ payload }) =>
	fakeHttpModule.post("v1/auth/signup", null, payload, TYPES.json);
