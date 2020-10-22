import cardGetSagas from "./cardGet.saga";
import cardsGetSagas from "./cardsGet.saga";
import cardDeleteSaga from "./cardDelete.sagas";
import cardEditSagas from "./cardEdit.sagas";
import cardCreateSagas from "./createCard.saga";
import searchCardsSagas from "./searchCards.saga";
import likedCardsSagas from "./postLikes.sagas";
import deleteLikesSagas from "./deleteLikes.sagas";
import getcardsCategoriesSagas from "./cardsCategories.sagas";
import filterCardsByCategorySagas from "./filterCardsByCategory.sagas";
import filterCardsByUserCreatorSagas from "./filterCardsByUserCreator.sagas";

export const sagas = [
	...cardGetSagas,
	...cardsGetSagas,
	...cardDeleteSaga,
	...cardEditSagas,
	...cardCreateSagas,
	...searchCardsSagas,
	...likedCardsSagas,
	...deleteLikesSagas,
	...getcardsCategoriesSagas,
	...filterCardsByCategorySagas,
	...filterCardsByUserCreatorSagas,
];
