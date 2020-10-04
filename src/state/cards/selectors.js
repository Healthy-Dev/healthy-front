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
	(Search) => Search?.searchCards,
);
