import authDuck from ".";

export const USER_LOGOUT = authDuck.defineType("USER_LOGOUT");

export const LOGIN_REQUEST = authDuck.defineType("LOGIN_REQUEST");
export const LOGIN_SUCCESS = authDuck.defineType("LOGIN_SUCCESS");
export const LOGIN_FAILURE = authDuck.defineType("LOGIN_FAILURE");

export const REGISTER_REQUEST = authDuck.defineType("REGISTER_REQUEST");
export const REGISTER_SUCCESS = authDuck.defineType("REGISTER_SUCCESS");
export const REGISTER_FAILURE = authDuck.defineType("REGISTER_FAILURE");
