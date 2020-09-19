import React from "react";
import { BrowserRouter } from "react-router-dom";
// Redux:
import { Provider } from "react-redux";
import makeStore, { history } from "state";
import { ConnectedRouter } from "connected-react-router";
// Components
import CreateCardView from "containers/CreateCard";
import CardDetails from "containers/CardDetails";
import HomeView from "containers/Home";
import RegisterView from "containers/Register";
import Login from "containers/Login";
import Search from "containers/Search";
import Profile from "containers/Profile";
import EditCard from "containers/EditCard";
import ErrorPage from "containers/ErrorPage";
import EditProfile from "containers/EditProfile";

/* import ThemeProvider from "components/_utils/ThemeProvider"; */

const store = makeStore();

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<BrowserRouter>
				<Search />
				<Profile />
				<EditProfile />
				<HomeView />
				<CardDetails />
				<EditCard />
				<CreateCardView />
				<RegisterView />
				<Login />
				<ErrorPage />
			</BrowserRouter>
		</ConnectedRouter>
	</Provider>
);

export default App;
