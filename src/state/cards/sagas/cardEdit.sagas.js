import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

const SuccessEditCard = (payload) => {
	console.log("se esta editando: ", payload?.payload);
};

function* watchEditCard() {
	const workerEditCard = makeWorker(services.editCard, {
		success: actions.successEditCard,
		fail: actions.failureEditCard,
		retry: actions.requestEditCard,
		hooks: { 200: SuccessEditCard},
	});

	yield takeLatest(types.EDIT_CARD_REQUEST, workerEditCard);
}

export default [watchEditCard];