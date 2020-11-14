import generalStatus from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("get_user"),
	...makeReducer("update_user"),
	...makeReducer("message_user"),
	...makeReducer("delete_user"),
};

const resetState = {
	loading: false,
	error: false,
	data: null,
};

const failure = {
	loading: false,
	error: true,
	data: null,
};

const reducer = generalStatus.createReducer(
	{
		[types.HIDDEN_MSG_USER]: (state) => ({
			...state,
			message_user: { data: null },
		}),
		[types.DELETE_USER_DATA]: (state) => ({
			...state,
			get_user: resetState,
			update_user: resetState,
			message_user: resetState,
		}),
		[types.GET_USER_REQUEST]: (state) => ({
			...state,
			get_user: {
				loading: true,
				error: false,
			},
		}),
		[types.GET_USER_SUCCESS]: (state, { payload }) => ({
			...state,
			get_user: {
				loading: false,
				error: false,
				data: payload.data,
			},
		}),
		[types.GET_USER_FAILURE]: (state) => ({
			...state,
			get_user: failure,
		}),
		[types.UPDATE_USER_REQUEST]: (state) => ({
			...state,
			update_user: {
				loading: true,
				error: false,
			},
		}),
		[types.UPDATE_USER_SUCCESS]: (state, { payload }) => {
			const reqData = JSON.parse(payload.reqData.data);
			const fakeDataUpdate = {
				instagram: reqData.instagram,
				twitter: reqData.twitter,
				name: reqData.name,
				profilePhoto: reqData.profilePhoto
					? "data:image/jpeg;base64," + reqData.profilePhoto
					: state.get_user.data.user.profilePhoto,
			};
			return {
				...state,
				update_user: {
					loading: false,
					error: false,
					data: payload.data,
				},
				get_user: {
					...state.get_user,
					data: { user: { ...state.get_user.data.user, ...fakeDataUpdate } },
				},
				message_user: { data: payload?.data.message },
			};
		},
		[types.UPDATE_USER_FAILURE]: (state) => ({
			...state,
			update_user: failure,
			message_user: { data: "No se pudo actualizar tus datos!" },
		}),

		[types.DELETE_USER_REQUEST]: (state) => ({
			...state,
			delete_user: {
				loading: true,
				error: false,
			},
		}),
		[types.DELETE_USER_SUCCESS]: (state) => ({
			...state,
			delete_user: { data: null },
			update_user: { data: null },
			get_user: { data: null },
			message_user: { data: "Healthy Dev le informa que el usuario ha sido eliminado" },
		}),
		[types.DELETE_USER_FAILURE]: (state) => ({
			...state,
			delete_user: failure,
			message_user: { data: "No se pudo eliminar esta cuenta!" },
		}),
	},
	initialState,
);

export default reducer;
