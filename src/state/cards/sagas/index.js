import cardsGetSagas from "./cardsGet.saga";
import cardDeleteSaga from "./cardDelete.sagas";
import cardEditSagas from "./cardEdit.sagas";

export const sagas = [...cardsGetSagas, ...cardDeleteSaga, ...cardEditSagas];