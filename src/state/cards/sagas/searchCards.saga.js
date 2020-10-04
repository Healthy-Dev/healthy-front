import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

function* watchSearch() {
	const workerSearch = makeWorker(services.getCardsSearch, {
		success: actions.successSearchCards,
		fail: actions.failureSearchCards,
		retry: actions.requestSearchCards,
	});
	yield takeLatest(types.SEARCH_CARDS_REQUEST, workerSearch);
}

export default [watchSearch];
