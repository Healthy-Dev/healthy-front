import generalStatus from ".";
import * as types from "./types";
import { makeReducer } from "../utils";

export const initialState = {
	...makeReducer("get_user"),
	...makeReducer("update_user"),
};

const reducer = generalStatus.createReducer(
	{
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
			get_user: {
				loading: false,
				error: true,
				data: null,
			},
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
			};
		},
		[types.UPDATE_USER_FAILURE]: (state) => ({
			...state,
			update_user: {
				loading: false,
				error: true,
				data: null,
			},
		}),
	},
	initialState,
);

export default reducer;
