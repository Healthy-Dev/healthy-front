import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

const SuccessSearch = (payload) => {
	// console.log("SEARCH....:", payload?.payload);
};

function* watchSearch() {
	const workerSearch = makeWorker(services.getCardsSearch, {
		success: actions.successSearch,
		fail: actions.failureSearch,
		retry: actions.requestSearch,
		hooks: { 200: SuccessSearch },
	});
	yield takeLatest(types.SEARCH_REQUEST, workerSearch);
}

export default [watchSearch];
