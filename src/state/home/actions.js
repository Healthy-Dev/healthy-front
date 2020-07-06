import homeDuck from ".";
import * as types from "./types";

export const requestHome = homeDuck.createAction(types.HOME_REQUEST);
export const successHome = homeDuck.createAction(types.HOME_SUCCESS);
export const failureHome = homeDuck.createAction(types.HOME_FAILURE);
