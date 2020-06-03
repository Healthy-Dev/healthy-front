import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import AdminView from "views/Admin";
import Card from './components/Home/Card/index'


const App = () => (
	<BrowserRouter>
		<Switch>
			<Card/>
			<AdminView />
			<Route path="*">
				<Redirect to="/" />
			</Route>
		</Switch>
	</BrowserRouter>
);

export default App;
