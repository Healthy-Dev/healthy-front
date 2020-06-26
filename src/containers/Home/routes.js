import { lazy } from "react";

// Containers
const Home = lazy(() => import("views/Home/"));

export default [
	{
		path: "/",
		component: Home,
		exact: true,
	},

];
