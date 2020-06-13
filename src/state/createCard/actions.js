import createCardDuck from ".";
import * as types from "./types";

export const requestCreateCard = createCardDuck.createAction(types.CREATE_CARD_REQUEST);
export const successCreateCard = createCardDuck.createAction(types.CREATE_CARD_SUCCESS);
export const failureCreateCard = createCardDuck.createAction(types.CREATE_CARD_FAILURE);
