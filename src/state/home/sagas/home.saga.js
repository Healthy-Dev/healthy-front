import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

const SuccessHome = (payload, reqData) => {
	//console.log("me llego:", payload?.payload);
};

function* watchHome() {
	const workerHome = makeWorker(services.getHome, {
		success: actions.successHome,
		fail: actions.failureHome,
		retry: actions.requestHome,
		hooks: { 200: SuccessHome },
	});
	yield takeLatest(types.HOME_REQUEST, workerHome);
}

export default [watchHome];
