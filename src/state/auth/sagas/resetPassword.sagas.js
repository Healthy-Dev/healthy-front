import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

function* watchResetPassword() {
	const workerResetPassword = makeWorker(services.resetPassword, {
		success: actions.successResetPassword,
		fail: actions.failureResetPassword,
		retry: actions.requestResetPassword,
	});
	yield takeLatest(types.RESET_PASSWORD_REQUEST, workerResetPassword);
}

export default [watchResetPassword];
