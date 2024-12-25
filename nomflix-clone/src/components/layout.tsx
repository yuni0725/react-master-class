import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const Wrapper = styled.div``;

function Layout() {
  return (
    <Wrapper>
      <Header></Header>
      <Outlet></Outlet>
    </Wrapper>
  );
}

export default Layout;
