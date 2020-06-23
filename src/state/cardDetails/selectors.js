import { createSelector } from "reselect";

const reducer = ({ CardDetails }) => CardDetails;

export const CardDetailsSelector = createSelector([reducer], (CardDetails) => CardDetails?.module1);
