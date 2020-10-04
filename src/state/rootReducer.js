import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// aca tienen que importar sus reducers y agregarlos
// en "combineReducers" para tener un reducer unico para todo el store
import CardDetails from "../state/cardDetails/reducer";
import Dummy from "state/dummy/reducer";
import CreateCard from "state/createCard/reducer";
import Home from "state/home/reducer";
import Register from "state/register/reducer";
import Login from "state/login/reducer";
import Search from "state/search/reducer";
import User from "state/user/reducer";
import Cards from "state/cards/reducer";

const createRootReducer = (history) =>
	combineReducers({
		Dummy,
		CreateCard,
		CardDetails,
		Home,
		Register,
		Login,
		Search,
		User,
		Cards,
		router: connectRouter(history),
	});

export default createRootReducer;
