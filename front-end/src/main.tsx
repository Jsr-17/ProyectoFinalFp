import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppTheme } from "./theme/Apptheme.tsx";
import { ThemeProvider } from "@emotion/react";
import { whiteTheme } from "./theme/theme.ts";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={whiteTheme}>
          <AppTheme>
            <App />
          </AppTheme>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
