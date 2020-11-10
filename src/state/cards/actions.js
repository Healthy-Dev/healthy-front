import cardsDuck from ".";
import * as types from "./types";

export const showMsgAlert = cardsDuck.createAction(types.SHOW_MSG_ALERT);
export const hiddenMsgAlert = cardsDuck.createAction(types.HIDDEN_MSG_ALERT);

export const requestCardsByUserCreator = cardsDuck.createAction(
	types.FILTER_CARDS_BY_USERCREATOR_REQUEST,
);
export const successCardsByUserCreator = cardsDuck.createAction(
	types.FILTER_CARDS_BY_USERCREATOR_SUCCESS,
);
export const failureCardsByUserCreator = cardsDuck.createAction(
	types.FILTER_CARDS_BY_USERCREATOR_FAIULRE,
);

export const requestGetCard = cardsDuck.createAction(types.GET_CARD_REQUEST);
export const successGetCard = cardsDuck.createAction(types.GET_CARD_SUCCESS);
export const failureGetCard = cardsDuck.createAction(types.GET_CARD_FAIULRE);

export const requestGetCards = cardsDuck.createAction(types.GET_CARDS_REQUEST);
export const successGetCards = cardsDuck.createAction(types.GET_CARDS_SUCCESS);
export const failureGetCards = cardsDuck.createAction(types.GET_CARDS_FAIULRE);

export const requestDeleteCard = cardsDuck.createAction(types.DELETE_CARD_REQUEST);
export const successDeleteCard = cardsDuck.createAction(types.DELETE_CARD_SUCCESS);
export const failureDeleteCard = cardsDuck.createAction(types.DELETE_CARD_FAIULRE);

export const requestEditCard = cardsDuck.createAction(types.EDIT_CARD_REQUEST);
export const successEditCard = cardsDuck.createAction(types.EDIT_CARD_SUCCESS);
export const failureEditCard = cardsDuck.createAction(types.EDIT_CARD_FAIULRE);

export const requestCreateCard = cardsDuck.createAction(types.CREATE_CARD_REQUEST);
export const successCreateCard = cardsDuck.createAction(types.CREATE_CARD_SUCCESS);
export const failureCreateCard = cardsDuck.createAction(types.CREATE_CARD_FAILURE);

export const requestSearchCards = cardsDuck.createAction(types.SEARCH_CARDS_REQUEST);
export const successSearchCards = cardsDuck.createAction(types.SEARCH_CARDS_SUCCESS);
export const failureSearchCards = cardsDuck.createAction(types.SEARCH_CARDS_FAILURE);

export const requestLikedCards = cardsDuck.createAction(types.LIKED_CARDS_REQUEST);
export const successLikedCards = cardsDuck.createAction(types.LIKED_CARDS_SUCCESS);
export const failureLikedCards = cardsDuck.createAction(types.LIKED_CARDS_FAILURE);

export const requestDislikedCards = cardsDuck.createAction(types.DISLIKED_CARDS_REQUEST);
export const successDislikedCards = cardsDuck.createAction(types.DISLIKED_CARDS_SUCCESS);
export const failureDislikedCards = cardsDuck.createAction(types.DISLIKED_CARDS_FAILURE);

export const requestCardsByCategory = cardsDuck.createAction(
	types.FILTER_CARDS_BY_CATEGORY_REQUEST,
);
export const successCardsByCategory = cardsDuck.createAction(
	types.FILTER_CARDS_BY_CATEGORY_SUCCESS,
);
export const failureCardsByCategory = cardsDuck.createAction(
	types.FILTER_CARDS_BY_CATEGORY_FAILURE,
);

export const requestGetCardsCategories = cardsDuck.createAction(
	types.GET_CARDS_CATEGORIES_REQUEST,
);
export const successGetCardsCategories = cardsDuck.createAction(
	types.GET_CARDS_CATEGORIES_SUCCESS,
);
export const failureGetCardsCategories = cardsDuck.createAction(
	types.GET_CARDS_CATEGORIES_FAILURE,
);
