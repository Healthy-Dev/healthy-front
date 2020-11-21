import getUserSagas from "./getUser.saga";
import updateUserSagas from "./updateUser.saga";
import deleteUserSagas from "./deleteUser.sagas";

export const sagas = [...getUserSagas, ...updateUserSagas, ...deleteUserSagas];
