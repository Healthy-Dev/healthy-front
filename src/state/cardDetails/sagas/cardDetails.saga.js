import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

const SuccessDetails = (payload, reqData) => {
	console.log("me llegaron los detalles:", payload?.payload);
};

function* watchDetails() {
	const workerDetails = makeWorker(services.getDetails, {
		success: actions.successDetails,
		fail: actions.failureDetails,
		retry: actions.requestDetails,
		hooks: { 200: SuccessDetails },
	});
	yield takeLatest(types.DETAILS_REQUEST, workerDetails);
}

export default [watchDetails];
