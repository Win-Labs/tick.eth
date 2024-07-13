import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Web3ModalProvider } from "./components/Web3ModalProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Web3ModalProvider>
    <App />
  </Web3ModalProvider>
);
