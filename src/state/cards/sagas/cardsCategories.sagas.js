import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

function* watchCategories() {
	const workerCategories = makeWorker(services.getCardsCategories, {
		success: actions.successGetCardsCategories,
		fail: actions.failureGetCardsCategories,
		retry: actions.requestGetCardsCategories,
	});
	yield takeLatest(types.GET_CARDS_CATEGORIES_REQUEST, workerCategories);
}

export default [watchCategories];
