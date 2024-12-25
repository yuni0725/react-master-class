import { createRoot } from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme";
import reset from "styled-reset";
import { QueryClient, QueryClientProvider } from "react-query";
const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
    box-sizing : border-box;

  }

  body {
    font-family : 'Roboto', --apple-system;
    line-height: 1.2;
    font-weight: 300;
    color : ${(props) => props.theme.white.darker}
    
  }
  body::-webkit-scrollbar {
    display : none;
  }


  a {
    text-decoration : none;
    color : inherit;
  }
`;

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </RecoilRoot>
);
