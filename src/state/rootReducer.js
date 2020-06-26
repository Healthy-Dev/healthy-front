import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// aca tienen que importar sus reducers y agregarlos
// en "combineReducers" para tener un reducer unico para todo el store
import Dummy from "state/dummy/reducer";
import Home from "state/home/reducer";

const createRootReducer = (history) =>
	combineReducers({
		Dummy,
		Home,
		router: connectRouter(history),
	});

export default createRootReducer;
