import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import ToDoList from "./components/ToDoList";

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
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <ToDoList></ToDoList>
    </>
  );
}

export default App;
