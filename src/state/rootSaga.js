import { fork, all } from "redux-saga/effects";
// aca tienen que importar todas las sagas del state,
// con un alias porque todas se exportan como "sagas" por default

import { sagas as AuthSagas } from "state/auth/sagas";
import { sagas as UserSagas } from "state/user/sagas";
import { sagas as CardsSagas } from "state/cards/sagas";

const allSagas = [...AuthSagas, ...UserSagas, ...CardsSagas];

export default function* rootSaga() {
	yield all(allSagas.map((saga) => fork(saga)));
}
