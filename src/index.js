import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Game from "./screens/Game";
import { store, persistor } from "./store";

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Game />
      </PersistGate>
    </Provider>
  );
}
