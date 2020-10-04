import cardsDuck from ".";

export const HOME_REQUEST = cardsDuck.defineType("HOME_REQUEST");
export const HOME_SUCCESS = cardsDuck.defineType("HOME_SUCCESS");
export const HOME_FAILURE = cardsDuck.defineType("HOME_FAILURE");

export const DELETE_CARD_REQUEST = cardsDuck.defineType("DELETE_CARD_REQUEST");
export const DELETE_CARD_SUCCESS = cardsDuck.defineType("DELETE_CARD_SUCCESS");
export const DELETE_CARD_FAIULRE = cardsDuck.defineType("DELETE_CARD_FAIULRE");

export const EDIT_CARD_REQUEST = cardsDuck.defineType("EDIT_CARD_REQUEST");
export const EDIT_CARD_SUCCESS = cardsDuck.defineType("EDIT_CARD_SUCCESS");
export const EDIT_CARD_FAIULRE = cardsDuck.defineType("EDIT_CARD_FAIULRE");