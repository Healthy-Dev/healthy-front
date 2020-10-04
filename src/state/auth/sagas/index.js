import loginSagas from "./login.saga";
import registerSagas from "./register.saga";

export const sagas = [...loginSagas, ...registerSagas];
