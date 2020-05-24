import { createSelector } from "reselect";

const reducer = ({ GeneralStatus }) => GeneralStatus;

export const generalStatusSelector = createSelector(
	[reducer],
	(generalStatus) => generalStatus,
);
