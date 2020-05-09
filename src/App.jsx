import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
//Styles
import "./app.scss";
import CreateCard from "./views/CreateCard";

const App = () => (
	<BrowserRouter>
		<Switch>
			<CreateCard />
			<Route path="*">
				<Redirect to="/" />
			</Route>
		</Switch>
	</BrowserRouter>
);

export default App;
