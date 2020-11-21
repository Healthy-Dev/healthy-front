import loginSagas from "./login.saga";
import registerSagas from "./register.saga";
import verifySagas from "./verify.sagas";
import resendVerificationSagas from "./resendVerification.sagas";
import forgotPasswordSagas from "./forgotPassword.sagas";
import resetPasswordSagas from "./resetPassword.sagas";

export const sagas = [
	...loginSagas,
	...registerSagas,
	...verifySagas,
	...resendVerificationSagas,
	...forgotPasswordSagas,
	...resetPasswordSagas,
];
