import registerDuck from ".";
import * as types from "./types";

export const requestRegister = registerDuck.createAction(types.REGISTER_REQUEST);
export const successRegister = registerDuck.createAction(types.REGISTER_SUCCESS);
export const failureRegister = registerDuck.createAction(types.REGISTER_FAILURE);
