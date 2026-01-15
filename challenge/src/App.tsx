import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #e09, #d0e);
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
`;

const Box = styled(motion.div)`
  width: 250px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  height: 150px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Switch = styled(motion.button)`
  margin-top: 30px;
  border: none;
  padding: 5px;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: whitesmoke;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  & div {
    margin-bottom: 30px;
  }
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const hoverVariants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};

function App() {
  const [show, setShow] = useState(true);
  const [id, setId] = useState<null | string>(null);
  const onSwitchClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <Wrapper>
      <GridBox>
        <Box
          style={{ originX: 1, originY: 1 }}
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
          onClick={() => setId("1")}
          key="1"
          layoutId="1"
        ></Box>
        <Box transition={{ type: "tween" }}>
          {show ? <Circle layoutId="circle"></Circle> : null}
        </Box>
        <Box transition={{ type: "tween" }}>
          {show ? null : <Circle layoutId="circle"></Circle>}
        </Box>
        <Box
          style={{ originX: 0, originY: 0 }}
          initial="initial"
          whileHover="hover"
          variants={hoverVariants}
          onClick={() => setId("2")}
          key="2"
          layoutId="2"
        ></Box>
      </GridBox>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              layoutId={id}
              style={{
                width: 400,
                height: 200,
                backgroundColor: "rgba(255, 255, 255, 1)",
              }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Switch
        onClick={onSwitchClick}
        whileHover={{ scale: 1.2, color: "orange" }}
      >
        Switch
      </Switch>
    </Wrapper>
  );
}

export default App;
