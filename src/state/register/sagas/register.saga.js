import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

const SuccessRegister = ({ payload, reqData }) => {
	console.log("me llego:", payload);
	console.log("el payload tiene:", reqData);
};

function* watchRegister() {
	const workerRegister = makeWorker(services.postRegister, {
		success: actions.successRegister,
		fail: actions.failureRegister,
		retry: actions.requestRegister,
		hooks: { 200: SuccessRegister },
	});
	yield takeLatest(types.REGISTER_REQUEST, workerRegister);
}

export default [watchRegister];
