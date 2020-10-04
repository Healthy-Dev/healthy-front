import cardGetSagas from "./cardGet.saga";
import cardsGetSagas from "./cardsGet.saga";
import cardDeleteSaga from "./cardDelete.sagas";
import cardEditSagas from "./cardEdit.sagas";
import cardCreateSagas from "./createCard.saga";

export const sagas = [
	...cardGetSagas,
	...cardsGetSagas,
	...cardDeleteSaga,
	...cardEditSagas,
	...cardCreateSagas,
];
