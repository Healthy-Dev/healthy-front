import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

const SuccessDummy = (payload, reqData) => {
	console.log("me llego:", payload);
	console.log("el payload tiene:", reqData);
};

function* watchDummy() {
	const workerDummy = makeWorker(services.postCard, {
		success: actions.successCreateCard,
		fail: actions.failureCreateCard,
		retry: actions.requestCreateCard,
		hooks: { 200: SuccessDummy },
	});
	yield takeLatest(types.CREATE_CARD_REQUEST, workerDummy);
}

export default [watchDummy];
