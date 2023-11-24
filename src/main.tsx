import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/space-grotesk";
import App from "./App.tsx";
import "./index.css";
import { ColorModeScript } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>
);
