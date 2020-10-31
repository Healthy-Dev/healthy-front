import { lazy } from "react";

// Containers
const CardDetails = lazy(() => import("views/CardDetails/"));
const CreateCard = lazy(() => import("views/CreateCard/"));
const EditCard = lazy(() => import("views/EditCard/"));
const EditProfile = lazy(() => import("views/EditProfile/"));
const Home = lazy(() => import("views/Home/"));
const Profile = lazy(() => import("views/Profile/"));
const Search = lazy(() => import("views/Search/"));

export default [
	{
		path: "/",
		component: Home,
		exact: true,
		auth: false,
	},
	{
		path: "/details/:cardId",
		component: CardDetails,
		exact: false,
	},
	{
		path: "/edit-card/:id",
		component: EditCard,
		exact: false,
	},
	{
		path: "/new",
		component: CreateCard,
		exact: true,
	},
	{
		path: "/edit-profile",
		component: EditProfile,
		exact: true,
	},
	{
		path: "/profile",
		component: Profile,
		exact: true,
	},
	{
		path: "/search",
		component: Search,
		exact: true,
	},
];
