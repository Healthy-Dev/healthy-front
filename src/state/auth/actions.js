import authDuck from ".";
import * as types from "./types";

export const hiddenMsgAlert = authDuck.createAction(types.HIDDEN_MSG_ALERT);
export const userLogout = authDuck.createAction(types.USER_LOGOUT);

export const requestLogin = authDuck.createAction(types.LOGIN_REQUEST);
export const successLogin = authDuck.createAction(types.LOGIN_SUCCESS);
export const failureLogin = authDuck.createAction(types.LOGIN_FAILURE);

export const requestRegister = authDuck.createAction(types.REGISTER_REQUEST);
export const successRegister = authDuck.createAction(types.REGISTER_SUCCESS);
export const failureRegister = authDuck.createAction(types.REGISTER_FAILURE);
export const warningRegister = authDuck.createAction(types.REGISTER_WARNING);

export const requestVerify = authDuck.createAction(types.VERIFY_REQUEST);
export const successVerify = authDuck.createAction(types.VERIFY_SUCCESS);
export const failureVerify = authDuck.createAction(types.VERIFY_FAILURE);
export const warningVerify = authDuck.createAction(types.VERIFY_WARNING);

export const requestResendVerification = authDuck.createAction(
	types.RESEND_VERIFY_REQUEST,
);
export const successResendVerification = authDuck.createAction(
	types.RESEND_VERIFY_SUCCESS,
);
export const failureResendVerification = authDuck.createAction(
	types.RESEND_VERIFY_FAILURE,
);

export const warningResendVerification = authDuck.createAction(
	types.RESEND_VERIFY_WARNING,
);

export const requestForgotPassword = authDuck.createAction(types.FORGOT_PASSWORD_REQUEST);
export const successForgotPassword = authDuck.createAction(types.FORGOT_PASSWORD_SUCCESS);
export const failureForgotPassword = authDuck.createAction(types.FORGOT_PASSWORD_FAILURE);

export const requestResetPassword = authDuck.createAction(types.RESET_PASSWORD_REQUEST);
export const successResetPassword = authDuck.createAction(types.RESET_PASSWORD_SUCCESS);
export const failureResetPassword = authDuck.createAction(types.RESET_PASSWORD_FAILURE);
