import { createSelector } from "reselect";

const reducer = ({ CreateCard }) => CreateCard;

export const CreateCardSelector = createSelector(
	[reducer],
	(CreateCard) => CreateCard?.cardForm,
);
