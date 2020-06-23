import { lazy } from "react";

// Containers
const CreateCard = lazy(() => import("views/CreateCard/"));

export default [
	{
		path: "/",
		component: CreateCard,
		exact: true,
	},
];
