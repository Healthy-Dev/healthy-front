import { createSelector } from "reselect";

const reducer = ({ User }) => User;

export const UserSelector = createSelector([reducer], (User) => User?.get_user);
