import dummyDuck from ".";
import * as types from "./types";

export const requestDummy = dummyDuck.createAction(types.DUMMY_REQUEST);
export const successDummy = dummyDuck.createAction(types.DUMMY_SUCCESS);
export const failureDummy = dummyDuck.createAction(types.DUMMY_FAILURE);
