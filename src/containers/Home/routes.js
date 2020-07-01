import { lazy } from "react";

// Containers
const Home = lazy(() => import("views/HomeView/"));

export default [
	{
		path: "/",
		component: Home,
		exact: true,
	},
];
