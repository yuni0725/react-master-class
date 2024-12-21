import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import { darkTheme } from "./theme.ts";
import { ThemeProvider } from "styled-components";

createRoot(document.getElementById("root")!).render(
  <>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <App></App>
      </ThemeProvider>
    </RecoilRoot>
  </>
);
