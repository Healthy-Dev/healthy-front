import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

function* watchHome() {
	const workerHome = makeWorker(services.getCards, {
		success: actions.successGetCards,
		fail: actions.failureGetCards,
		retry: actions.requestGetCards,
	});
	yield takeLatest(types.GET_CARDS_REQUEST, workerHome);
}

export default [watchHome];
