import generalStatus from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("module1"),
};

const reducer = generalStatus.createReducer(
	{
		[types.DUMMY_REQUEST]: (state) => ({
			...state,
			loading: true,
			error: false,
		}),
		[types.DUMMY_SUCCESS]: (state, { payload }) => ({
			...state,
			loading: false,
			error: false,
			data: payload,
		}),
		[types.DUMMY_FAILURE]: (state) => ({
			...state,
			loading: false,
			error: true,
			data: null,
		}),
	},
	initialState,
);

export default reducer;
