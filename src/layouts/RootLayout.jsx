import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
export default function RootLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

// Styles

const Main = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
