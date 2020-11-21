import cardsDuck from ".";

export const SHOW_MSG_ALERT = cardsDuck.defineType("SHOW_MSG_ALERT");
export const HIDDEN_MSG_ALERT = cardsDuck.defineType("HIDDEN_MSG_ALERT");

export const FILTER_CARDS_BY_USERCREATOR_REQUEST = cardsDuck.defineType(
	"FILTER_CARDS_BY_USERCREATOR_REQUEST",
);
export const FILTER_CARDS_BY_USERCREATOR_SUCCESS = cardsDuck.defineType(
	"FILTER_CARDS_BY_USERCREATOR_SUCCESS",
);
export const FILTER_CARDS_BY_USERCREATOR_FAIULRE = cardsDuck.defineType(
	"ILTER_CARDS_BY_USERCREATOR_FAIULRE",
);

export const GET_CARD_REQUEST = cardsDuck.defineType("GET_CARD_REQUEST");
export const GET_CARD_SUCCESS = cardsDuck.defineType("GET_CARD_SUCCESS");
export const GET_CARD_FAIULRE = cardsDuck.defineType("GET_CARD_FAIULRE");

export const GET_CARDS_REQUEST = cardsDuck.defineType("GET_CARDS_REQUEST");
export const GET_CARDS_SUCCESS = cardsDuck.defineType("GET_CARDS_SUCCESS");
export const GET_CARDS_FAIULRE = cardsDuck.defineType("GET_CARDS_FAIULRE");

export const DELETE_CARD_REQUEST = cardsDuck.defineType("DELETE_CARD_REQUEST");
export const DELETE_CARD_SUCCESS = cardsDuck.defineType("DELETE_CARD_SUCCESS");
export const DELETE_CARD_FAIULRE = cardsDuck.defineType("DELETE_CARD_FAIULRE");

export const EDIT_CARD_REQUEST = cardsDuck.defineType("EDIT_CARD_REQUEST");
export const EDIT_CARD_SUCCESS = cardsDuck.defineType("EDIT_CARD_SUCCESS");
export const EDIT_CARD_FAIULRE = cardsDuck.defineType("EDIT_CARD_FAIULRE");

export const CREATE_CARD_REQUEST = cardsDuck.defineType("CREATE_CARD_REQUEST");
export const CREATE_CARD_SUCCESS = cardsDuck.defineType("CREATE_CARD_SUCCESS");
export const CREATE_CARD_FAILURE = cardsDuck.defineType("CREATE_CARD_FAILURE");

export const SEARCH_CARDS_REQUEST = cardsDuck.defineType("SEARCH_CARDS_REQUEST");
export const SEARCH_CARDS_SUCCESS = cardsDuck.defineType("SEARCH_CARDS_SUCCESS");
export const SEARCH_CARDS_FAILURE = cardsDuck.defineType("SEARCH_CARDS_FAILURE");

export const LIKED_CARDS_REQUEST = cardsDuck.defineType("LIKED_CARDS_REQUEST");
export const LIKED_CARDS_SUCCESS = cardsDuck.defineType("LIKED_CARDS_SUCCESS");
export const LIKED_CARDS_FAILURE = cardsDuck.defineType("LIKED_CARDS_FAILURE");

export const DISLIKED_CARDS_REQUEST = cardsDuck.defineType("DISLIKED_CARDS_REQUEST");
export const DISLIKED_CARDS_SUCCESS = cardsDuck.defineType("DISLIKED_CARDS_SUCCESS");
export const DISLIKED_CARDS_FAILURE = cardsDuck.defineType("DISLIKED_CARDS_FAILURE");

export const FILTER_CARDS_BY_CATEGORY_REQUEST = cardsDuck.defineType(
	"FILTER_CARDS_BY_CATEGORY_REQUEST",
);
export const FILTER_CARDS_BY_CATEGORY_SUCCESS = cardsDuck.defineType(
	"FILTER_CARDS_BY_CATEGORY_SUCCESS",
);
export const FILTER_CARDS_BY_CATEGORY_FAILURE = cardsDuck.defineType(
	"FILTER_CARDS_BY_CATEGORY_FAILURE",
);

export const GET_CARDS_CATEGORIES_REQUEST = cardsDuck.defineType(
	"GET_CARDS_CATEGORIES_REQUEST",
);
export const GET_CARDS_CATEGORIES_SUCCESS = cardsDuck.defineType(
	"GET_CARDS_CATEGORIES_SUCCESS",
);
export const GET_CARDS_CATEGORIES_FAILURE = cardsDuck.defineType(
	"GET_CARDS_CATEGORIES_FAILURE",
);
