import generalStatus from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("getCards"),
	...makeReducer("deleteCard"),
	...makeReducer("editCard"),
};

const reducer = generalStatus.createReducer(
	{
		[types.HOME_REQUEST]: (state) => ({
			...state,
			getCards: {
				loading: true,
				error: false,
			},
		}),
		[types.HOME_SUCCESS]: (state, { payload }) => ({
			...state,
			getCards: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.HOME_FAILURE]: (state) => ({
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
	},
	initialState,
);

export default reducer;
