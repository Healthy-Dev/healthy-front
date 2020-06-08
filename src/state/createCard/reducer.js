import generalStatus from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("cardForm"),
};

const reducer = generalStatus.createReducer(
	{
		[types.CREATE_CARD_REQUEST]: (state) => ({
			...state,
			cardForm: {
				loading: true,
				error: false,
			},
		}),
		[types.CREATE_CARD_SUCCESS]: (state, { payload }) => ({
			...state,
			cardForm: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.CREATE_CARD_FAILURE]: (state) => ({
			...state,
			cardForm: {
				loading: false,
				error: true,
				data: null,
			},
		}),
	},
	initialState,
);

export default reducer;
