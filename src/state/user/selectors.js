import { createSelector } from "reselect";

const reducer = ({ User }) => User;

export const UserSelector = createSelector([reducer], (User) => User?.get_user);

export const UpdateUserSelector = createSelector([reducer], (User) => User?.update_user);

export const DeleteUserSelector = createSelector([reducer], (User) => User?.delete_user);

export const MessageUserSelector = createSelector(
	[reducer],
	(User) => User?.message_user,
);
