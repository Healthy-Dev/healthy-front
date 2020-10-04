import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

function* watchLogin() {
	const workerLogin = makeWorker(services.postLogin, {
		success: actions.successLogin,
		fail: actions.failureLogin,
		retry: actions.requestLogin,
	});
	yield takeLatest(types.LOGIN_REQUEST, workerLogin);
}

export default [watchLogin];
