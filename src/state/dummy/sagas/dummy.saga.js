import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

const SuccessDummy = (payload, reqData) => {
	console.log("me llego:", payload?.payload);
};

function* watchDummy() {
	const workerDummy = makeWorker(services.getDummy, {
		success: actions.successDummy,
		fail: actions.failureDummy,
		retry: actions.requestDummy,
		hooks: { 200: SuccessDummy },
	});
	yield takeLatest(types.DUMMY_REQUEST, workerDummy);
}

export default [watchDummy];
