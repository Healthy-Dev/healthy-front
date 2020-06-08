import createCardDuck from ".";
import * as types from "./types";

export const requestDummy = createCardDuck.createAction(types.CREATE_CARD_REQUEST);
export const successDummy = createCardDuck.createAction(types.CREATE_CARD_SUCCESS);
export const failureDummy = createCardDuck.createAction(types.CREATE_CARD_FAILURE);
