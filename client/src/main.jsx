import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import App from "./App";
import { StateContextProvider } from './context';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider
    activeChain={Sepolia}
    clientId="14f768ae9aa126654e850bfc3cb030b5"
  >
    <Router>
    <StateContextProvider>
      <App />
    </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
