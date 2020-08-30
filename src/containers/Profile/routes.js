import { lazy } from "react";

// Containers
const Profile = lazy(() => import("views/Profile"));

export default [
	{
		path: "/profile",
		component: Profile,
		exact: true,
	},
];
