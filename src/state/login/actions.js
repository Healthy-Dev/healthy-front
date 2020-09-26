import loginDuck from ".";
import * as types from "./types";

export const requestLogin = loginDuck.createAction(types.LOGIN_REQUEST);
export const successLogin = loginDuck.createAction(types.LOGIN_SUCCESS);
export const failureLogin = loginDuck.createAction(types.LOGIN_FAILURE);
