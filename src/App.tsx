import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Themes/default";
import { GlobalStyle } from "./Themes/global/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
