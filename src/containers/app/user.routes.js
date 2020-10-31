import { lazy } from "react";

const UserCreated = lazy(() => import("views/UserCreated/"));
const Login = lazy(() => import("views/Login/"));
const Register = lazy(() => import("views/Register/"));
const Onboarding = lazy(() => import("views/Onboarding/"));

export default [
	{
		path: "/usercreated",
		component: UserCreated,
		exact: true,
	},

	{
		path: "/login",
		component: Login,
		exact: true,
	},
	{
		path: "/register",
		component: Register,
		exact: true,
	},
	{
		path: "/",
		component: Onboarding,
		exact: true,
	},
];
