import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
// Redux:
import { Provider } from "react-redux";
import makeStore, { history } from "state";
import { ConnectedRouter } from "connected-react-router";
// Components
/* import AdminView from "views/Admin"; */
import CreateCardView from "views/CreateCard";
import CardDetails from "views/CardDetails";
/* import ThemeProvider from "components/_utils/ThemeProvider"; */

const store = makeStore();

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<BrowserRouter>
				<Switch>
					{/* 					<ThemeProvider> */}
					{/* <AdminView /> */}
					<Route exact path="/">
						<CreateCardView />
					</Route>
					<Route path="/details/:cardId?">
						<CardDetails />
					</Route>
					{/* 					<Route path="*">
						<Redirect to="/" />
					</Route> */}
					{/* 					</ThemeProvider> */}
				</Switch>
			</BrowserRouter>
		</ConnectedRouter>
	</Provider>
);

export default App;
