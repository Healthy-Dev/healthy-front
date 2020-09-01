// React
import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// Custom Components
import MultipleRoutes from "components/_shared/MultipleRoutes";
//import NavBar from "components/_shared/NavBar";
// Routes
import routes from "./routes";
//import { mobileRoutes } from "./navbarRoutes";

const MainContainer = () => {
	return (
		// <NavBar routes={{ mobileRoutes }}>
		<Suspense fallback>
			<Switch>
				{routes.map((route, i) => (
					<MultipleRoutes key={`${i}_${route.path}`} {...route} />
				))}
				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</Suspense>
		//</NavBar>
	);
};

export default MainContainer;
