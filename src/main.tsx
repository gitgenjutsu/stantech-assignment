import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "../src/redux/store";
import "./styles/global.scss";
import App from "./App.tsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
