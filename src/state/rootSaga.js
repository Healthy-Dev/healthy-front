import { fork, all } from "redux-saga/effects";
// aca tienen que importar todas las sagas del state,
// con un alias porque todas se exportan como "sagas" por default

import { sagas as DummySagas } from "state/dummy/sagas";
import { sagas as HomeSagas } from "state/home/sagas";

const allSagas = [...DummySagas, ...HomeSagas];

export default function* rootSaga() {
	yield all(allSagas.map((saga) => fork(saga)));
}
