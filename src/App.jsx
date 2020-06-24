import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
// import CardDetails from "views/CardDetails";
// import AdminView from "views/Admin";
import AdminView from "containers/Admin";
import CardDetails from "containers/CardDetails";
// Redux:
import { Provider } from "react-redux";
import makeStore, { history } from "state";
import { ConnectedRouter } from "connected-react-router";
const store = makeStore();

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<BrowserRouter>
				<Switch>
					<CardDetails />
					<AdminView />
					<Route path="*">
						<Redirect to="/" />
					</Route>
				</Switch>
			</BrowserRouter>
		</ConnectedRouter>
	</Provider>
);

export default App;
