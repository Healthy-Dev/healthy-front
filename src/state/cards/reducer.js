import generalStatus from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("getCard"),
	...makeReducer("getCards"),
	...makeReducer("deleteCard"),
	...makeReducer("editCard"),
	...makeReducer("createdCard"),
	...makeReducer("searchCards"),
	...makeReducer("likedCard"),
	...makeReducer("deslikedCard"),
	...makeReducer("filterCardsByCategory"),
	...makeReducer("cardCategories"),
};

const reducer = generalStatus.createReducer(
	{
		[types.GET_CARD_REQUEST]: (state) => ({
			...state,
			getCard: { loading: true, error: false },
		}),
		[types.GET_CARD_SUCCESS]: (state, { payload }) => ({
			...state,
			getCard: { loading: false, error: false, data: payload },
		}),
		[types.GET_CARD_FAIULRE]: (state) => ({
			...state,
			getCard: { loading: false, error: true, data: null },
		}),
		[types.GET_CARDS_REQUEST]: (state) => ({
			...state,
			getCards: { loading: true, error: false },
		}),
		[types.GET_CARDS_SUCCESS]: (state, { payload }) => ({
			...state,
			getCards: { loading: false, error: false, data: payload },
		}),
		[types.GET_CARDS_FAIULRE]: (state) => ({
			...state,
			getCards: { loading: false, error: true, data: null },
		}),
		[types.DELETE_CARD_REQUEST]: (state) => ({
			...state,
			deleteCard: { loading: true, error: false },
		}),
		[types.DELETE_CARD_SUCCESS]: (state, { payload }) => ({
			...state,
			deleteCard: { loading: false, error: false, data: payload },
		}),
		[types.DELETE_CARD_FAIULRE]: (state) => ({
			...state,
			deleteCard: { loading: false, error: true, data: null },
		}),
		[types.EDIT_CARD_REQUEST]: (state) => ({
			...state,
			editCard: { loading: true, error: false },
		}),
		[types.EDIT_CARD_SUCCESS]: (state, { payload }) => ({
			...state,
			editCard: { loading: false, error: false, data: payload },
		}),
		[types.EDIT_CARD_FAIULRE]: (state) => ({
			...state,
			editCard: { loading: false, error: true, data: null },
		}),
		[types.CREATE_CARD_REQUEST]: (state) => ({
			...state,
			createdCard: { loading: true, error: false },
		}),
		[types.CREATE_CARD_SUCCESS]: (state, { payload }) => ({
			...state,
			createdCard: { loading: false, error: false, data: payload },
		}),
		[types.CREATE_CARD_FAILURE]: (state) => ({
			...state,
			createdCard: { loading: false, error: true, data: null },
		}),
		[types.SEARCH_CARDS_REQUEST]: (state) => ({
			...state,
			searchCards: {
				loading: true,
				error: false,
			},
		}),
		[types.SEARCH_CARDS_SUCCESS]: (state, { payload }) => ({
			...state,
			searchCards: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.SEARCH_CARDS_FAILURE]: (state) => ({
			...state,
			searchCards: {
				loading: false,
				error: true,
				data: null,
			},
		}),
		[types.FILTER_CARDS_BY_CATEGORY_REQUEST]: (state) => ({
			...state,
			filterCardsByCategory: {
				loading: true,
				error: false,
			},
		}),
		[types.FILTER_CARDS_BY_CATEGORY_SUCCESS]: (state, { payload }) => ({
			...state,
			filterCardsByCategory: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.FILTER_CARDS_BY_CATEGORY_FAILURE]: (state) => ({
			...state,
			filterCardsByCategory: {
				loading: false,
				error: true,
				data: null,
			},
		}),
		[types.LIKED_CARDS_REQUEST]: (state) => ({
			...state,
			getCard: { ...state.getCard, likesCount: state.getCard.data.likesCount + 1 },
			likedCard: { loading: true },
		}),
		[types.LIKED_CARDS_SUCCESS]: (state, { payload }) => ({
			...state,
			likedCard: { loading: false, error: false, data: payload },
		}),
		[types.LIKED_CARDS_FAILURE]: (state) => ({
			...state,
			getCard: { ...state.getCard, likesCount: state.getCard.data.likesCount - 1 },
			likedCard: { loading: false, error: true },
		}),
		[types.DISLIKED_CARDS_REQUEST]: (state) => ({
			...state,
			deslikedCard: { loading: true, error: false },
		}),
		[types.DISLIKED_CARDS_SUCCESS]: (state, { payload }) => ({
			...state,
			deslikedCard: { loading: false, error: false, data: payload },
		}),
		[types.DISLIKED_CARDS_FAILURE]: (state) => ({
			...state,
			deslikedCard: { loading: false, error: true, data: null },
		}),
		[types.GET_CARDS_CATEGORIES_REQUEST]: (state) => ({
			...state,
			cardCategories: {
				loading: true,
				error: false,
			},
		}),
		[types.GET_CARDS_CATEGORIES_SUCCESS]: (state, { payload }) => ({
			...state,
			cardCategories: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.GET_CARDS_CATEGORIES_FAILURE]: (state) => ({
			...state,
			cardCategories: {
				loading: false,
				error: true,
				data: null,
			},
		}),
	},

	initialState,
);

export default reducer;
