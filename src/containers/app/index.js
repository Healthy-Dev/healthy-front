import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import appRoutes from "./app.routes";
import userRoutes from "./user.routes";

import MultipleRoutes from "components/_shared/MultipleRoutes";
import Loading from "components/_shared/Loading";
import useAuth from "hooks/useAuth";

const Application = () => {
	const { isAuth } = useAuth();

	return (
		<Suspense fallback={<Loading />}>
			<Switch>
				{!isAuth
					? userRoutes.map((route, i) => (
							<MultipleRoutes key={`${i}_${route.path}`} {...route} />
					  ))
					: appRoutes.map((route, i) => (
							<MultipleRoutes key={`${i}_${route.path}`} {...route} />
					  ))}
			</Switch>
		</Suspense>
	);
};

export default Application;
