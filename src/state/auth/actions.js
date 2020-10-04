import authDuck from ".";
import * as types from "./types";

export const userLogout = authDuck.createAction(types.USER_LOGOUT);

export const requestLogin = authDuck.createAction(types.LOGIN_REQUEST);
export const successLogin = authDuck.createAction(types.LOGIN_SUCCESS);
export const failureLogin = authDuck.createAction(types.LOGIN_FAILURE);

export const requestRegister = authDuck.createAction(types.REGISTER_REQUEST);
export const successRegister = authDuck.createAction(types.REGISTER_SUCCESS);
export const failureRegister = authDuck.createAction(types.REGISTER_FAILURE);
