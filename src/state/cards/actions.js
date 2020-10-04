import cardsDuck from ".";
import * as types from "./types";

export const requestGetCards = cardsDuck.createAction(types.GET_CARD_REQUEST);
export const successGetCards = cardsDuck.createAction(types.GET_CARD_SUCCESS);
export const failureGetCards = cardsDuck.createAction(types.GET_CARD_FAIULRE);

export const requestDeleteCard = cardsDuck.createAction(types.DELETE_CARD_REQUEST);
export const successDeleteCard = cardsDuck.createAction(types.DELETE_CARD_SUCCESS);
export const failureDeleteCard = cardsDuck.createAction(types.DELETE_CARD_FAIULRE);

export const requestEditCard = cardsDuck.createAction(types.EDIT_CARD_REQUEST);
export const successEditCard = cardsDuck.createAction(types.EDIT_CARD_SUCCESS);
export const failureEditCard = cardsDuck.createAction(types.EDIT_CARD_FAIULRE);
