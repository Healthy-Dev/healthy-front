import { lazy } from "react";

// Containers
const UserCreated = lazy(() => import("views/UserCreated/"));

export default [
	{
		path: "/usercreated",
		component: UserCreated,
		exact: true,
	},
];
