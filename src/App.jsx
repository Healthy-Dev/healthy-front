import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
/* import AdminView from "views/Admin"; */
import CreateCardView from "views/CreateCard";
import ThemeProvider from "components/_utils/ThemeProvider";

const App = () => (
	<BrowserRouter>
		<Switch>
			<ThemeProvider>
				{/* <AdminView /> */}
				<CreateCardView />
			</ThemeProvider>
			<Route path="*">
				<Redirect to="/" />
			</Route>
		</Switch>
	</BrowserRouter>
);

export default App;
