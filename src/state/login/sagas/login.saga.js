import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as types from "../types";
import * as services from "../services";
import { makeWorker } from "../../utils";

const SuccessLogin = ({ payload, reqData }) => {
	console.log("me llego:", payload);
	console.log("el payload tiene:", reqData);
};

function* watchLogin() {
	const workerLogin = makeWorker(services.postLogin, {
		success: actions.successLogin,
		fail: actions.failureLogin,
		retry: actions.requestLogin,
		hooks: { 200: SuccessLogin },
	});
	yield takeLatest(types.LOGIN_REQUEST, workerLogin);
}

export default [watchLogin];
