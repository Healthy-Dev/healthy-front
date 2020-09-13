import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import routes from "./routes";

// Components
import Loading from "components/_shared/Loading";
import MultipleRoutes from "components/_shared/MultipleRoutes";

const EditCard = () => (
	<Suspense fallback={<Loading />}>
		<Switch>
			{routes.map((route, i) => (
				<MultipleRoutes key={`${i}_${route.path}`} {...route} />
			))}
		</Switch>
	</Suspense>
);

export default EditCard;
