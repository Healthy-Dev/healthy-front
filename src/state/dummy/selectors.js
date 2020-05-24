import { createSelector } from "reselect";

const reducer = ({ Dummy }) => Dummy;

export const DummySelector = createSelector([reducer], (Dummy) => Dummy?.module1);
