import { lazy } from "react";

// Containers
const CreateCard = lazy(() => import("views/CreateCard/"));

export default [
	{
		path: "/new",
		component: CreateCard,
		exact: true,
	},
];
