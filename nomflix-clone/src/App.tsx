import { createGlobalStyle, styled } from "styled-components";
import { reset } from "styled-reset";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
    box-sizing : border-box;
  }

  body {
    font-family : 'Roboto', --apple-system;
    background:linear-gradient(135deg,#e09,#d0e);
    color : black;
    line-height: 1.2;
    font-weight: 300;
  }

  a {
    text-decoration : none;
    color : inherit;
  }
`;

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 40vw;
  div:first-child,
  :last-child {
    grid-column: span 2;
  }
  gap: 10px;
`;

const Box = styled(motion.div)`
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const box: Variants = {};

function App() {
  const [id, setId] = useState<null | string>(null);
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Wrapper>
        <Grid>
          {["1", "2", "3", "4"].map((n) => (
            <Box onClick={() => setId(n)} key={n} layoutId={n}></Box>
          ))}
        </Grid>
        <AnimatePresence>
          {id ? (
            <Overlay
              onClick={() => setId(null)}
              initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            >
              <Box layoutId={id} style={{ width: 300, height: 150 }}></Box>
            </Overlay>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

export default App;
