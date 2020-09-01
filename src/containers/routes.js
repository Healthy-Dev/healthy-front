import { lazy } from "react";

// Containers
//const LoginContainer = lazy(() => import("containers/Login"));
const UserContainer = lazy(() => import("containers/User"));

export default [
	/* 	{
		path: "/login",
		exact: true,
		component: DashboardContainer,
	}, */
	{
		path: "/",
		component: UserContainer,
	},
];
