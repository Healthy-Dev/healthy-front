import { lazy } from "react";

// Containers
const ErrorPage = lazy(() => import("views/ErrorPage"));

export default [
	{
		path: "/error-page",
		component: ErrorPage,
		exact: true,
	},
];
