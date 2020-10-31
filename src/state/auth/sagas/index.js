import loginSagas from "./login.saga";
import registerSagas from "./register.saga";
import verifySagas from "./verify.sagas";
import resendVerification from "./resendVerification.sagas";

export const sagas = [
	...loginSagas,
	...registerSagas,
	...verifySagas,
	...resendVerification,
];
