import cardsDuck from ".";

export const GET_CARD_REQUEST = cardsDuck.defineType("GET_CARD_REQUEST");
export const GET_CARD_SUCCESS = cardsDuck.defineType("GET_CARD_SUCCESS");
export const GET_CARD_FAIULRE = cardsDuck.defineType("GET_CARD_FAIULRE");

export const DELETE_CARD_REQUEST = cardsDuck.defineType("DELETE_CARD_REQUEST");
export const DELETE_CARD_SUCCESS = cardsDuck.defineType("DELETE_CARD_SUCCESS");
export const DELETE_CARD_FAIULRE = cardsDuck.defineType("DELETE_CARD_FAIULRE");

export const EDIT_CARD_REQUEST = cardsDuck.defineType("EDIT_CARD_REQUEST");
export const EDIT_CARD_SUCCESS = cardsDuck.defineType("EDIT_CARD_SUCCESS");
export const EDIT_CARD_FAIULRE = cardsDuck.defineType("EDIT_CARD_FAIULRE");