import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

const SuccessUpdateUser = (payload) => {
	console.log("me llego:", payload?.payload);
};

function* watchUser() {
	const workerUser = makeWorker(services.updateUser, {
		success: actions.updateUserSuccess,
		fail: actions.updateUserFailure,
		retry: actions.updateUserRequest,
		hooks: { 200: SuccessUpdateUser },
	});
	yield takeLatest(types.UPDATE_USER_REQUEST, workerUser);
}

export default [watchUser];