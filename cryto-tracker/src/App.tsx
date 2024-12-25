import { RouterProvider } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import router from "./Router";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
  * {
    box-sizing : border-box;
  }
  body {
    font-family : 'Roboto', --apple-system;
    background-color : ${(props) => props.theme.bgColor};
    color : ${(props) => props.theme.textColor};
    line-height: 1.2;
    font-weight: 300;
  }

  a {
    text-decoration : none;
    color : inherit;
  }
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
