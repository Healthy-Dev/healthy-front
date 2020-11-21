import { fakeHttpModule, TYPES } from "common/http";

export const getUser = ({ payload: { token } }) =>
	fakeHttpModule.get("v1/users/me", token, undefined, TYPES.json);

export const updateUser = ({ payload: { token, data } }) =>
	fakeHttpModule.put("v1/users/me", token, data, TYPES.json);

export const deleteUser = ({ payload: { token } }) =>
	fakeHttpModule.delete(`v1/users/?token=${token}`, undefined, undefined, TYPES.json);
