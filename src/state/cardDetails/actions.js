import cardDetailsDuck from ".";
import * as types from "./types";

export const requestDetails = cardDetailsDuck.createAction(types.DETAILS_REQUEST);
export const successDetails = cardDetailsDuck.createAction(types.DETAILS_SUCCESS);
export const failureDetails = cardDetailsDuck.createAction(types.DETAILS_FAILURE);
