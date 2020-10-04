import { createSelector } from "reselect";

const reducer = ({ Auth }) => Auth;

export const LoginSelector = createSelector([reducer], (Auth) => Auth?.login);

export const RegisterSelector = createSelector([reducer], (Auth) => Auth?.register);
