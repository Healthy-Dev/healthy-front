import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

function* watchDeleteUser() {
	const workerUser = makeWorker(services.deleteUser, {
		success: actions.deleteUserSuccess,
		fail: actions.deleteUserFailure,
		retry: actions.deleteUserRequest,
	});
	yield takeLatest(types.DELETE_USER_REQUEST, workerUser);
}

export default [watchDeleteUser];
