import userDuck from ".";

export const DELETE_USER_DATA = userDuck.defineType("DELETE_USER_DATA");
export const HIDDEN_MSG_USER = userDuck.defineType("HIDDEN_MSG_USER");

export const GET_USER_REQUEST = userDuck.defineType("GET_USER_REQUEST");
export const GET_USER_SUCCESS = userDuck.defineType("GET_USER_SUCCESS");
export const GET_USER_FAILURE = userDuck.defineType("GET_USER_FAILURE");

export const UPDATE_USER_REQUEST = userDuck.defineType("UPDATE_USER_REQUEST");
export const UPDATE_USER_SUCCESS = userDuck.defineType("UPDATE_USER_SUCCESS");
export const UPDATE_USER_FAILURE = userDuck.defineType("UPDATE_USER_FAILURE");

export const DELETE_USER_REQUEST = userDuck.defineType("DELETE_USER_REQUEST");
export const DELETE_USER_SUCCESS = userDuck.defineType("DELETE_USER_SUCCESS");
export const DELETE_USER_FAILURE = userDuck.defineType("DELETE_USER_FAILURE");
