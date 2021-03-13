import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import routes from "./routes";

import MultipleRoutes from "router/MultipleRoutes";
import Loading from "components/_shared/Loading";

const Routes = () => (
	<Suspense fallback={<Loading />}>
		<Switch>
			{routes.map((route, i) => (
				<MultipleRoutes key={`${i}_${route.path}`} {...route} />
			))}
		</Switch>
	</Suspense>
);

export default Routes;
