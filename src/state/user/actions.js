import userDuck from ".";
import * as types from "./types";

export const getUserRequest = userDuck.createAction(types.GET_USER_REQUEST);
export const getUserSuccess = userDuck.createAction(types.GET_USER_SUCCESS);
export const getUserFailure = userDuck.createAction(types.GET_USER_FAILURE);

export const updateUserRequest = userDuck.createAction(types.UPDATE_USER_REQUEST);
export const updateUserSuccess = userDuck.createAction(types.UPDATE_USER_SUCCESS);
export const updateUserFailure = userDuck.createAction(types.UPDATE_USER_FAILURE);