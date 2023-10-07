import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {loadState, saveState} from "@src/utils/localStorage";
import {autorun} from "mobx";
import { RootStore, storesContext } from "@stores";

const initState = loadState();

const mobxStore = new RootStore(initState);
autorun(
    () => {
        console.dir(mobxStore);
        saveState(mobxStore.serialize());
    },
    { delay: 1000 }
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <storesContext.Provider value={mobxStore}>
      <App />
      </storesContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
