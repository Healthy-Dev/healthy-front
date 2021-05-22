import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import makeStore, { history } from "state";
import { ConnectedRouter } from "connected-react-router";

import Routes from "router";
import ModalContext from "hooks/useModal";
import CardsILikeProvider from "state/cardsILike";

const store = makeStore();

const App = () => (
  <Provider store={store}>
    <CardsILikeProvider>
      <ModalContext>
        <ConnectedRouter history={history}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ConnectedRouter>
      </ModalContext>
    </CardsILikeProvider>
  </Provider>
);

export default App;
