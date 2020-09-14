import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

const SuccessGetCard = (payload) => {
	console.log("me llego:", payload?.payload);
};

function* watchHome() {
	const workerUser = makeWorker(services.getUser, {
		success: actions.getUserSuccess,
		fail: actions.getUserFailure,
		retry: actions.getUserRequest,
		hooks: { 200: SuccessGetCard },
	});
	yield takeLatest(types.GET_USER_REQUEST, workerUser);
}

export default [watchHome];
