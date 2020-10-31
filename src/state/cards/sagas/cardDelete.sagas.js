import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

const SuccessDeleteCard = () => {
	window.history.back();
};

function* watchDeleteCard() {
	const workerDeleteCard = makeWorker(services.deleteCard, {
		success: actions.successDeleteCard,
		fail: actions.failureDeleteCard,
		retry: actions.requestDeleteCard,
		hooks: { 200: SuccessDeleteCard },
	});

	yield takeLatest(types.DELETE_CARD_REQUEST, workerDeleteCard);
}

export default [watchDeleteCard];
