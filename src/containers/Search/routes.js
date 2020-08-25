import { lazy } from "react";

// Containers
const Search = lazy(() => import("views/Search"));

export default [
	{
		path: "/search",
		component: Search,
		exact: true,
	},
];
