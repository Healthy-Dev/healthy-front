import generalStatus from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("login"),
	...makeReducer("register"),
	...makeReducer("verify"),
	...makeReducer("resendVerification"),
	...makeReducer("messageAuth"),
};

const reducer = generalStatus.createReducer(
	{
		[types.HIDDEN_MSG_ALERT]: (state) => ({
			...state,
			messageAuth: { data: null },
		}),
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
				data: payload.data,
			},
		}),
		[types.LOGIN_FAILURE]: (state) => {
			return {
				...state,
				login: {
					loading: false,
					error: true,
					data: null,
				},
				messageAuth: { data: "Verifique los datos ingresados" },
			};
		},
		[types.USER_LOGOUT]: (state) => ({
			...state,
			login: {
				loading: false,
				error: false,
				data: null,
			},
			register: {
				loading: false,
				error: false,
				data: null,
			},
			verify: {
				loading: false,
				error: false,
				data: null,
			},
			resendVerification: {
				loading: false,
				error: false,
				data: null,
			},
		}),
		[types.REGISTER_REQUEST]: (state) => ({
			...state,
			register: {
				loading: true,
				error: false,
				warning: false,
			},
		}),
		[types.REGISTER_SUCCESS]: (state, { payload }) => ({
			...state,
			register: {
				loading: false,
				error: false,
				warning: false,
				data: payload.data,
			},
		}),
		[types.REGISTER_FAILURE]: (state, { payload }) => ({
			...state,
			register: {
				loading: false,
				error: true,
				warning: false,
				data: null,
			},
			messageAuth: { data: payload.data?.message },
		}),
		[types.REGISTER_WARNING]: (state, { payload }) => ({
			...state,
			register: {
				loading: false,
				error: false,
				warning: true,
				data: null,
			},
			messageAuth: { data: payload.data?.message },
		}),
		[types.VERIFY_REQUEST]: (state) => ({
			...state,
			verify: {
				loading: true,
				error: false,
			},
		}),
		[types.VERIFY_SUCCESS]: (state, { payload }) => ({
			...state,
			verify: {
				loading: false,
				error: false,
				warning: false,
				data: payload,
			},
		}),
		[types.VERIFY_FAILURE]: (state, { payload }) => ({
			...state,
			verify: {
				loading: false,
				error: true,
				warning: false,
				data: null,
				errorMessage: payload.data?.message,
			},
		}),
		[types.VERIFY_WARNING]: (state, { payload }) => ({
			...state,
			verify: {
				loading: false,
				error: false,
				warning: true,
				data: null,
				messageWarning: payload.data?.message,
			},
		}),
		[types.RESEND_VERIFY_REQUEST]: (state) => ({
			...state,
			resendVerification: {
				loading: true,
				error: false,
			},
		}),
		[types.RESEND_VERIFY_SUCCESS]: (state, { payload }) => ({
			...state,
			resendVerification: {
				loading: false,
				error: false,
				warning: false,
				data: payload.data,
			},
		}),
		[types.RESEND_VERIFY_FAILURE]: (state, { payload }) => ({
			...state,
			resendVerification: {
				loading: false,
				error: true,
				warning: false,
				data: null,
				errorMessage: payload.data?.message,
			},
		}),
		[types.RESEND_VERIFY_WARNING]: (state, { payload }) => ({
			...state,
			resendVerification: {
				loading: false,
				error: false,
				warning: true,
				data: null,
				messageWarning: payload.data?.message,
			},
		}),
	},
	initialState,
);

export default reducer;
