import { lazy } from "react";

// Containers
const EditProfile = lazy(() => import("views/EditProfile"));

export default [
	{
		path: "/edit-profile",
		component: EditProfile,
		exact: true,
	},
];
