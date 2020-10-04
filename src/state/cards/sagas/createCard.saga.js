import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

function* watchCreateCard() {
	const workerCreateCard = makeWorker(services.postCard, {
		success: actions.successCreateCard,
		fail: actions.failureCreateCard,
		retry: actions.requestCreateCard,
	});
	yield takeLatest(types.CREATE_CARD_REQUEST, workerCreateCard);
}

export default [watchCreateCard];
