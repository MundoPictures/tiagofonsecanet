import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Router";
import "./index.css";
import { ModalProvider } from "./contexts/ModalContext";
import MetaPixelProvider from "./contexts/MetaPixelContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MetaPixelProvider>
      <ModalProvider>
        <AppRouter />
      </ModalProvider>
    </MetaPixelProvider>
  </React.StrictMode>
);
