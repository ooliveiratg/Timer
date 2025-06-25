import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Themes/default";
import { GlobalStyle } from "./Themes/global/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CyclesContextProvider } from "./contexts/CyclesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
