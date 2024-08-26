import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { ScreenProvider } from "./context/ScreenContext.tsx";
import { WindowProvider } from "./context/WindowContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScreenProvider>
      <WindowProvider>
        <App />
      </WindowProvider>
    </ScreenProvider>
  </StrictMode>
);
