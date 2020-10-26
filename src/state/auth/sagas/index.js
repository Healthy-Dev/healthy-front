import loginSagas from "./login.saga";
import registerSagas from "./register.saga";
import verifySagas from "./verify.sagas";

export const sagas = [...loginSagas, ...registerSagas, ...verifySagas];
