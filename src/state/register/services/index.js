import { fakeHttpModule, TYPES } from "common/http";

export const postRegister = ({ payload }) =>
	fakeHttpModule.post("v1/auth/register", null, payload, TYPES.json);
