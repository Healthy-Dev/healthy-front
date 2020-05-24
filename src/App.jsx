import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import AdminView from "views/Admin";
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
