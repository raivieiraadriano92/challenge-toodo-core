import React from "react";
import { Provider } from "react-redux";
// @ts-ignore
import { PersistGate } from "redux-persist/lib/integration/react";

import store from "../store";

const AppContainer: React.FC = ({ children }) => (
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      {children}
    </PersistGate>
  </Provider>
);

export default AppContainer;
