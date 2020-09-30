import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import routes from "./routes";
import Loader from "components/_shared/Loader";
// Components
import MultipleRoutes from "components/_shared/MultipleRoutes";

const Search = () => (
	<Suspense fallback={<Loader />}>
		<Switch>
			{routes.map((route, i) => (
				<MultipleRoutes key={`${i}_${route.path}`} {...route} />
			))}
		</Switch>
	</Suspense>
);

export default Search;
