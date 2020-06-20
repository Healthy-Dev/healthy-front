import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// aca tienen que importar sus reducers y agregarlos
// en "combineReducers" para tener un reducer unico para todo el store
import Dummy from "state/dummy/reducer";
import createCard from "state/createCard/reducer";

const createRootReducer = (history) =>
	combineReducers({
		Dummy,
		createCard,
		router: connectRouter(history),
	});

export default createRootReducer;
