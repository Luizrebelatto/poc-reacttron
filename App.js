import React from 'react';
import { Provider } from "react-redux";
import { store } from "./store";

import { ActionsScreen } from './ActionsScreen';

export default function App() {
  return (
    <Provider store={store}>
     <ActionsScreen/>
    </Provider>
  );
}
