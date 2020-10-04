import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

function* watchDetails() {
	const workerDetails = makeWorker(services.getCard, {
		success: actions.successGetCard,
		fail: actions.failureGetCard,
		retry: actions.requestGetCard,
	});
	yield takeLatest(types.GET_CARD_REQUEST, workerDetails);
}

export default [watchDetails];
