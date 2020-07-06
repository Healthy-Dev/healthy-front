import generalStatus from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("home"),
};

const reducer = generalStatus.createReducer(
	{
		[types.HOME_REQUEST]: (state) => ({
			...state,
			home: {
				loading: true,
				error: false,
			},
		}),
		[types.HOME_SUCCESS]: (state, { payload }) => ({
			...state,
			home: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.HOME_FAILURE]: (state) => ({
			...state,
			home: {
				loading: false,
				error: true,
				data: null,
			},
		}),
	},
	initialState,
);

export default reducer;
