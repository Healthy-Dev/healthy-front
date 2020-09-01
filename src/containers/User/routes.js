import { lazy } from "react";

// Containers
const Search = lazy(() => import("views/Search"));
const Profile = lazy(() => import("views/Profile"));
const Onboarding = lazy(() => import("views/Onboarding"));
const CreateCard = lazy(() => import("views/CreateCard/"));
const CardDetails = lazy(() => import("views/CardDetails"));
const Home = lazy(() => import("views/Home"));

export default [
	{
		path: "/search",
		component: Search,
		exact: true,
	},
	{
		path: "/details/:cardId",
		component: CardDetails,
		exact: false,
	},
	{
		path: "/profile",
		component: Profile,
		exact: true,
	},
	{
		path: "/new",
		component: CreateCard,
		exact: true,
	},
	{
		path: "/onboarding",
		component: Onboarding,
		exact: true,
	},
	{
		path: "/",
		component: Home,
		exact: true,
	},
];
