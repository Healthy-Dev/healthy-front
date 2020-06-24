import { lazy } from "react";

// Containers
const CardDetails = lazy(() => import("views/CardDetails/"));

export default [
	{
		path: "/details/:cardId",
		component: CardDetails,
		exact: false,
	},
];
