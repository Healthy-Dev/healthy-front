import { createSelector } from "reselect";

const reducer = ({ Register }) => Register;

export const RegisterSelector = createSelector(
	[reducer],
	(Register) => Register?.register,
);
