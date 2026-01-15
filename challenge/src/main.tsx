import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle></GlobalStyle>
    <App />
  </StrictMode>
);
