import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import AdminView from "views/Admin";
import CardDetails from "views/CardDetails";
// Redux:
import { Provider } from "react-redux";
import makeStore, { history } from "state";
import { ConnectedRouter } from "connected-react-router";
// Components
/* import AdminView from "views/Admin"; */
import CreateCardView from "views/CreateCard";
import ThemeProvider from "components/_utils/ThemeProvider";

const store = makeStore();

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<BrowserRouter>
				<Switch>
					<ThemeProvider>
						<CreateCardView />
						<CardDetails />
						<Route path="*">
							<Redirect to="/" />
						</Route>
					</ThemeProvider>
				</Switch>
			</BrowserRouter>
		</ConnectedRouter>
	</Provider>
);

export default App;
