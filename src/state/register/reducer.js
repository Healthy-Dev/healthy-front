import generalStatus from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("register"),
};

const reducer = generalStatus.createReducer(
	{
		[types.REGISTER_REQUEST]: (state) => ({
			...state,
			register: {
				loading: true,
				error: false,
			},
		}),
		[types.REGISTER_SUCCESS]: (state, { payload }) => ({
			...state,
			register: {
				loading: false,
				error: false,
				data: payload,
			},
		}),
		[types.REGISTER_FAILURE]: (state, { payload }) => ({
			...state,
			register: {
				loading: false,
				error: true,
				data: null,
				errorMessage: payload.data.message,
			},
		}),
	},
	initialState,
);

export default reducer;
