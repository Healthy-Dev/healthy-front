import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

function* watchVerify() {
	const workerVerify = makeWorker(services.verify, {
		success: actions.successVerify,
		fail: actions.failureVerify,
		retry: actions.requestVerify,
		conflict: actions.warningVerify,
	});
	yield takeLatest(types.VERIFY_REQUEST, workerVerify);
}

export default [watchVerify];
