import authDuck from ".";

export const HIDDEN_MSG_ALERT = authDuck.defineType("HIDDEN_MSG_ALERT");
export const USER_LOGOUT = authDuck.defineType("USER_LOGOUT");

export const LOGIN_REQUEST = authDuck.defineType("LOGIN_REQUEST");
export const LOGIN_SUCCESS = authDuck.defineType("LOGIN_SUCCESS");
export const LOGIN_FAILURE = authDuck.defineType("LOGIN_FAILURE");

export const REGISTER_REQUEST = authDuck.defineType("REGISTER_REQUEST");
export const REGISTER_SUCCESS = authDuck.defineType("REGISTER_SUCCESS");
export const REGISTER_FAILURE = authDuck.defineType("REGISTER_FAILURE");
export const REGISTER_WARNING = authDuck.defineType("REGISTER_WARNING");

export const VERIFY_REQUEST = authDuck.defineType("VERIFY_REQUEST");
export const VERIFY_SUCCESS = authDuck.defineType("VERIFY_SUCCESS");
export const VERIFY_FAILURE = authDuck.defineType("VERIFY_FAILURE");
export const VERIFY_WARNING = authDuck.defineType("VERIFY_WARNING");

export const RESEND_VERIFY_REQUEST = authDuck.defineType("RESEND_VERIFY_REQUEST");
export const RESEND_VERIFY_SUCCESS = authDuck.defineType("RESEND_VERIFY_SUCCESS");
export const RESEND_VERIFY_FAILURE = authDuck.defineType("RESEND_VERIFY_FAILURE");
export const RESEND_VERIFY_WARNING = authDuck.defineType("RESEND_VERIFY_WARNING");

export const FORGOT_PASSWORD_REQUEST = authDuck.defineType("FORGOT_PASSWORD_REQUEST");
export const FORGOT_PASSWORD_SUCCESS = authDuck.defineType("FORGOT_PASSWORD_SUCCESS");
export const FORGOT_PASSWORD_FAILURE = authDuck.defineType("FORGOT_PASSWORD_FAILURE");

export const RESET_PASSWORD_REQUEST = authDuck.defineType("RESET_PASSWORD_REQUEST");
export const RESET_PASSWORD_SUCCESS = authDuck.defineType("RESET_PASSWORD_SUCCESS");
export const RESET_PASSWORD_FAILURE = authDuck.defineType("RESET_PASSWORD_FAILURE");
