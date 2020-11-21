import React from "react";
import { BrowserRouter } from "react-router-dom";
// Redux:
import { Provider } from "react-redux";
import makeStore, { history } from "state";
import { ConnectedRouter } from "connected-react-router";

/* import ThemeProvider from "components/_utils/ThemeProvider"; */

// import Application from "containers/app";
import Routes from "containers";
import ModalContext from "hooks/useModal";
import CardsILikeProvider from "state/cardsILike";

const store = makeStore();

const App = () => (
	<Provider store={store}>
		<CardsILikeProvider>
			<ModalContext>
				<ConnectedRouter history={history}>
					<BrowserRouter>
						{/* <Application /> */}
						<Routes />
					</BrowserRouter>
				</ConnectedRouter>
			</ModalContext>
		</CardsILikeProvider>
	</Provider>
);

export default App;
