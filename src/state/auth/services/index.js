import { fakeHttpModule, TYPES } from "common/http";

export const postLogin = ({ payload }) =>
	fakeHttpModule.post("v1/auth/signin", null, payload, TYPES.json);

export const postRegister = ({ payload }) =>
	fakeHttpModule.post("v1/auth/signup", null, payload, TYPES.json);

export const verify = ({ payload: { token } }) =>
	fakeHttpModule.post(`v1/auth/verify/?token=${token}`, undefined, undefined, TYPES.json);

export const resendVerification = ({ payload: { email } }) =>
	fakeHttpModule.get(
		`v1/auth/resend-verification/${email}`,
		undefined,
		undefined,
		TYPES.json,
	);

export const forgotPassword = ({ payload: { email } }) =>
	fakeHttpModule.get(
		`v1/auth/forgot-password/${email}`,
		undefined,
		undefined,
		TYPES.json,
	);

export const resetPassword = ({ payload: { token, password } }) =>
	fakeHttpModule.post(
		`v1/auth/reset-password/?token=${token}`,
		undefined,
		password,
		TYPES.json,
	);
