import { lazy } from "react";

// Containers
const Admin = lazy(() => import("views/Admin/"));

export default [
	{
		path: "/",
		component: Admin,
		exact: true,
	},
	
];
