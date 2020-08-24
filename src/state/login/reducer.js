import generalStatus from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("login"),
};

const reducer = generalStatus.createReducer(
	{
		[types.LOGIN_REQUEST]: (state) => ({
			...state,
			login: {
				loading: true,
				error: false,
			},
		}),
		[types.LOGIN_SUCCESS]: (state, { payload }) => ({
			...state,
			login: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.LOGIN_FAILURE]: (state) => ({
			...state,
			login: {
				loading: false,
				error: true,
				data: null,
			},
		}),
	},
	initialState,
);

export default reducer;
