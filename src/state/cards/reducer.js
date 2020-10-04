import generalStatus from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("getCard"),
	...makeReducer("getCards"),
	...makeReducer("deleteCard"),
	...makeReducer("editCard"),
	...makeReducer("createdCard"),
};

const reducer = generalStatus.createReducer(
	{
		[types.GET_CARD_REQUEST]: (state) => ({
			...state,
			getCard: {
				loading: true,
				error: false,
			},
		}),
		[types.GET_CARD_SUCCESS]: (state, { payload }) => ({
			...state,
			getCard: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.GET_CARD_FAIULRE]: (state) => ({
			...state,
			getCard: {
				loading: false,
				error: true,
				data: null,
			},
		}),
		[types.GET_CARDS_REQUEST]: (state) => ({
			...state,
			getCards: {
				loading: true,
				error: false,
			},
		}),
		[types.GET_CARDS_SUCCESS]: (state, { payload }) => ({
			...state,
			getCards: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.GET_CARDS_FAIULRE]: (state) => ({
			...state,
			getCards: {
				loading: false,
				error: true,
				data: null,
			},
		}),
		[types.DELETE_CARD_REQUEST]: (state) => ({
			...state,
			deleteCard: {
				loading: true,
				error: false,
			},
		}),
		[types.DELETE_CARD_SUCCESS]: (state, { payload }) => ({
			...state,
			deleteCard: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.DELETE_CARD_FAIULRE]: (state) => ({
			...state,
			deleteCard: {
				loading: false,
				error: true,
				data: null,
			},
		}),
		[types.EDIT_CARD_REQUEST]: (state) => ({
			...state,
			editCard: {
				loading: true,
				error: false,
			},
		}),
		[types.EDIT_CARD_SUCCESS]: (state, { payload }) => ({
			...state,
			editCard: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.EDIT_CARD_FAIULRE]: (state) => ({
			...state,
			editCard: {
				loading: false,
				error: true,
				data: null,
			},
		}),
		[types.CREATE_CARD_REQUEST]: (state) => ({
			...state,
			createdCard: {
				loading: true,
				error: false,
			},
		}),
		[types.CREATE_CARD_SUCCESS]: (state, { payload }) => ({
			...state,
			createdCard: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.CREATE_CARD_FAILURE]: (state) => ({
			...state,
			createdCard: {
				loading: false,
				error: true,
				data: null,
			},
		}),
	},
	initialState,
);

export default reducer;
