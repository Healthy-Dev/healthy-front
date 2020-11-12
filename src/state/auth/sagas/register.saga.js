import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

function* watchRegister() {
	const workerRegister = makeWorker(services.postRegister, {
		success: actions.successRegister,
		fail: actions.failureRegister,
		retry: actions.requestRegister,
		conflict: actions.warningRegister,
	});
	yield takeLatest(types.REGISTER_REQUEST, workerRegister);
}

export default [watchRegister];
