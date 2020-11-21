import { createSelector } from "reselect";

const reducer = ({ Cards }) => Cards;

export const GetCardSelector = createSelector([reducer], (Cards) => Cards?.getCard);

export const GetCardsSelector = createSelector([reducer], (Cards) => Cards?.getCards);

export const DeleteCardSelector = createSelector([reducer], (Cards) => Cards?.deleteCard);

export const EditCardSelector = createSelector([reducer], (Cards) => Cards?.editCard);

export const CreateCardSelector = createSelector(
	[reducer],
	(Cards) => Cards?.createdCard,
);

export const SearchCardsSelector = createSelector(
	[reducer],
	(Cards) => Cards?.searchCards,
);

export const filterCardsByCategory = createSelector(
	[reducer],
	(Cards) => Cards?.filterCardsByCategory,
);

export const GetCardsCategories = createSelector(
	[reducer],
	(Cards) => Cards?.cardCategories,
);

export const LikedCardsSelector = createSelector([reducer], (Card) => Card?.likedCard);

export const DislikedCardsSelector = createSelector(
	[reducer],
	(Card) => Card?.deslikedCard,
);

export const FilterByUserCreator = createSelector(
	[reducer],
	(Cards) => Cards?.filterByUserCreator,
);

export const hiddenMesgSelector = createSelector(
	[reducer],
	(Cards) => Cards?.messageCard,
);

export const GetCardsLikesByMe = createSelector(
	[reducer],
	(Cards) => Cards?.cardsLikeByMe,
);
