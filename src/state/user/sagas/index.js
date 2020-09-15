import getUserSagas from "./getUser.saga";
import updateUserSagas from "./updateUser.saga";

export const sagas = [...getUserSagas, ...updateUserSagas];
