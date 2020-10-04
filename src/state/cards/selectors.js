import { createSelector } from "reselect";

const reducer = ({ Cards }) => Cards;

export const GetCardsSelector = createSelector([reducer], (Cards) => Cards?.getCards);

export const DeleteCardSelector = createSelector([reducer], (Cards) => Cards?.deleteCard);

export const EditCardSelector = createSelector([reducer], (Cards) => Cards?.editCard);
