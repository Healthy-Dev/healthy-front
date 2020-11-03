import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

function* watchResendVerification() {
	const workerResendVerification = makeWorker(services.resendVerification, {
		success: actions.successResendVerification,
		fail: actions.failureResendVerification,
		retry: actions.requestResendVerification,
		conflict: actions.warningResendVerification,
	});
	yield takeLatest(types.RESEND_VERIFY_REQUEST, workerResendVerification);
}

export default [watchResendVerification];
