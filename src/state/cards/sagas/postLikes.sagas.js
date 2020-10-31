import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

function* likedPost() {
	const workerLiked = makeWorker(services.postlikes, {
		success: actions.successLikedCards,
		fail: actions.failureLikedCards,
		retry: actions.requestLikedCards,
	});
	yield takeLatest(types.LIKED_CARDS_REQUEST, workerLiked);
}

export default [likedPost];
