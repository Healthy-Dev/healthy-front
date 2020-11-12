import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

function* watchForgotPassWord() {
	const workerForgotPassword = makeWorker(services.forgotPassword, {
		success: actions.successForgotPassword,
		fail: actions.failureForgotPassword,
		retry: actions.requestForgotPassword,
	});
	yield takeLatest(types.FORGOT_PASSWORD_REQUEST, workerForgotPassword);
}

export default [watchForgotPassWord];
