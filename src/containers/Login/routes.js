import { lazy } from "react";

// Containers
const Login = lazy(() => import("views/Login/"));

export default [
	{
		path: "/login",
		component: Login,
		exact: true,
	},
];
