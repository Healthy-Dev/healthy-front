import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

function* deleteLike() {
	const workerDeleteLike = makeWorker(services.deleteLike, {
		success: actions.successDislikedCards,
		fail: actions.failureDislikedCards,
		retry: actions.requestDislikedCards,
	});
	yield takeLatest(types.DISLIKED_CARDS_REQUEST, workerDeleteLike);
}

export default [deleteLike];
