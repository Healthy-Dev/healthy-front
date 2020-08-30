import generalStatus from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("search"),
};

const reducer = generalStatus.createReducer(
	{
		[types.SEARCH_REQUEST]: (state) => ({
			...state,
			search: {
				loading: true,
				error: false,
			},
		}),
		[types.SEARCH_SUCCESS]: (state, { payload }) => ({
			...state,
			search: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.SEARCH_FAILURE]: (state) => ({
			...state,
			search: {
				loading: false,
				error: true,
				data: null,
			},
		}),
	},
	initialState,
);

export default reducer;
