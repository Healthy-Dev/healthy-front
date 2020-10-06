import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

function* watchFilterByCategories() {
	const workerByCategory = makeWorker(services.filterCardsByCategory, {
		success: actions.successCardsByCategory,
		fail: actions.failureCardsByCategory,
		retry: actions.requestCardsByCategory,
	});
	yield takeLatest(types.FILTER_CARDS_BY_CATEGORY_REQUEST, workerByCategory);
}

export default [watchFilterByCategories];
