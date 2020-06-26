import { createSelector } from "reselect";

const reducer = ({ Home }) => Home;

export const HomeSelector = createSelector([reducer], (Home) => Home?.home);
