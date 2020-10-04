import generalStatus from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("login"),
	...makeReducer("register"),
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
		[types.USER_LOGOUT]: (state) => ({
			...state,
			login: {
				loading: false,
				error: false,
				data: undefined,
			},
		}),
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
