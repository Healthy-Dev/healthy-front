import { createSelector } from "reselect";

const reducer = ({ Login }) => Login;

export const LoginSelector = createSelector(
	[reducer],
	(Login) => Login?.Login
);
