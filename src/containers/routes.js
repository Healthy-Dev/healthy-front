import { lazy } from "react";

// Containers
const UserCreated = lazy(() => import("views/UserCreated/"));
const CardDetails = lazy(() => import("views/CardDetails/"));
const CreateCard = lazy(() => import("views/CreateCard/"));
const EditCard = lazy(() => import("views/EditCard/"));
const EditProfile = lazy(() => import("views/EditProfile/"));
const Home = lazy(() => import("views/Home/"));
const Login = lazy(() => import("views/Login/"));
const Profile = lazy(() => import("views/Profile/"));
const Register = lazy(() => import("views/Register/"));
const Search = lazy(() => import("views/Search/"));

export default [
	{
		path: "/",
		component: Home,
		exact: true,
		auth: false,
	},
	{
		path: "/usercreated",
		component: UserCreated,
		exact: true,
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
		path: "/login",
		component: Login,
		exact: true,
	},
	{
		path: "/profile",
		component: Profile,
		exact: true,
	},
	{
		path: "/register",
		component: Register,
		exact: true,
	},
	{
		path: "/search",
		component: Search,
		exact: true,
	},
];
