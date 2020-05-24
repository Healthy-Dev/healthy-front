import { fork, all } from "redux-saga/effects";
// aca tienen que importar todas las sagas del state,
// con un alias porque todas se exportan como "sagas" por default

import { sagas as DummySagas } from "state/dummy/sagas";

const allSagas = [...DummySagas];

export default function* rootSaga() {
	yield all(allSagas.map((saga) => fork(saga)));
}
