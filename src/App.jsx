import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
// Redux:
import { Provider } from "react-redux";
import makeStore, { history } from "state";
import { ConnectedRouter } from "connected-react-router";
// Components
import CreateCardView from "containers/CreateCard";
import CardDetails from "containers/CardDetails";
import HomeView from "containers/Home";
import Search from "containers/Search";
import Profile from "containers/Profile";
/* import ThemeProvider from "components/_utils/ThemeProvider"; */

const store = makeStore();

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<BrowserRouter>
				<Search />
				<Profile />
				<HomeView />
				<CardDetails />
				<CreateCardView />
			</BrowserRouter>
		</ConnectedRouter>
	</Provider>
);

export default App;
