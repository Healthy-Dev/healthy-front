import { lazy } from "react";

// Containers
const Onboarding = lazy(() => import("views/Onboarding"));

export default [
	{
		path: "/onboarding",
		component: Onboarding,
		exact: true,
	},
];
