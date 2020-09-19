import { lazy } from "react";

// Containers
const EditCard = lazy(() => import("views/EditCard/"));

export default [
	{
		path: "/edit-card/:id",
		component: EditCard,
		exact: true,
	},
];
