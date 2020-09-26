import { lazy } from "react";

// Containers
const Register = lazy(() => import("views/Register/"));

export default [
	{
		path: "/register",
		component: Register,
		exact: true,
	},
];
