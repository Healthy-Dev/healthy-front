import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// aca tienen que importar sus reducers y agregarlos
// en "combineReducers" para tener un reducer unico para todo el store
import CardDetails from "../state/cardDetails/reducer";
import Dummy from "state/dummy/reducer";

const createRootReducer = (history) =>
	combineReducers({
		Dummy,
		CardDetails,
		router: connectRouter(history),
	});

export default createRootReducer;
