import { createSelector } from "reselect";

const reducer = ({ Auth }) => Auth;

export const LoginSelector = createSelector([reducer], (Auth) => Auth?.login);

export const RegisterSelector = createSelector([reducer], (Auth) => Auth?.register);

export const VerifySelector = createSelector([reducer], (Auth) => Auth?.verify);

export const ResendVerificationSelector = createSelector(
	[reducer],
	(Auth) => Auth?.resendVerification,
);

export const hiddenMsgAuthSelector = createSelector(
	[reducer],
	(Auth) => Auth?.messageAuth,
);

export const forgotPasswordSelector = createSelector(
	[reducer],
	(Auth) => Auth?.forgotPassword,
);

export const resetPasswordSelector = createSelector(
	[reducer],
	(Auth) => Auth?.resetPassword,
);
