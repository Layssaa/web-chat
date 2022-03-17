import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/context-provider";
import RoutesCustom from "./routers";
import { GlobalStyle } from "./styles/globalstyle";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <GlobalStyle />
      <RoutesCustom />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
