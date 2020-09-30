import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import routes from "./routes";

// Components
import MultipleRoutes from "components/_shared/MultipleRoutes";
import Loading from "components/_shared/Loading";

const CardDetails = () => (
	<Suspense fallback={<Loading />}>
		<Switch>
			{routes.map((route, i) => (
				<MultipleRoutes key={`${i}_${route.path}`} {...route} />
			))}
		</Switch>
	</Suspense>
);

export default CardDetails;
