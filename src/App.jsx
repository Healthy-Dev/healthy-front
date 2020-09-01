import React from "react";
import { BrowserRouter } from "react-router-dom";
// Redux:
import { Provider } from "react-redux";
import makeStore, { history } from "state";
import { ConnectedRouter } from "connected-react-router";
// Components
import UserContainer from "./containers/User";

/* import ThemeProvider from "components/_utils/ThemeProvider"; */

const store = makeStore();

const App = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<BrowserRouter>
				<UserContainer />
			</BrowserRouter>
		</ConnectedRouter>
	</Provider>
);

export default App;
