import { fork, all } from "redux-saga/effects";
// aca tienen que importar todas las sagas del state,
// con un alias porque todas se exportan como "sagas" por default

import { sagas as CardDetailsSagas } from "state/cardDetails/sagas";
import { sagas as DummySagas } from "state/dummy/sagas";
import { sagas as CreateCardSagas } from "state/createCard/sagas";
import { sagas as HomeSagas } from "state/home/sagas";
import { sagas as LoginSagas } from "state/login/sagas";

import { sagas as SearchSagas } from "state/search/sagas";

const allSagas = [
	...DummySagas,
	...CreateCardSagas,
	...CardDetailsSagas,
	...HomeSagas,
	...LoginSagas,
	...SearchSagas,
];

export default function* rootSaga() {
	yield all(allSagas.map((saga) => fork(saga)));
}
