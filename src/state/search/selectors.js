import { createSelector } from "reselect";

const reducer = ({ Search }) => Search;

export const SearchSelector = createSelector([reducer], (Search) => Search?.search);