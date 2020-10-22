import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

function* watchFilterByUserCreator() {
	const workerByUserCreator = makeWorker(services.filterCardsByUserCreator, {
		success: actions.successCardsByUserCreator,
		fail: actions.failureCardsByUserCreator,
		retry: actions.requestCardsByUserCreator,
	});
	yield takeLatest(types.FILTER_CARDS_BY_USERCREATOR_REQUEST, workerByUserCreator);
}

export default [watchFilterByUserCreator];
