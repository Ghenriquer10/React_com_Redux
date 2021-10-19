import React from "react";
import {BrowserRouter} from 'react-router-dom'
import Routes from "./routes";
import Header from "./components/Header";
import { Provider } from "react-redux";
import history from "./services/history";
 import store from "./store";

export default function App(){
  return(
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Header/>
        <Routes/>
      </BrowserRouter>
    </Provider>
  )
};
