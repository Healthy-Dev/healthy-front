import searchDuck from ".";
import * as types from "./types";

export const requestSearch = searchDuck.createAction(types.SEARCH_REQUEST);
export const successSearch = searchDuck.createAction(types.SEARCH_SUCCESS);
export const failureSearch = searchDuck.createAction(types.SEARCH_FAILURE);
