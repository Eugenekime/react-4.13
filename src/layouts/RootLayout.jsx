import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

export default function RootLayout() {
  return (
    <>
      <Header>
        <Nav>
          <Logo to="articles">Realworld Blog</Logo>
          <NavLink to="#">Sign In</NavLink>
          <SignUpLink to="#">Sign Up</SignUpLink>
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

// Styles
const Header = styled.header`
  margin-bottom: 25px;
  display: flex;
  background-color: white;
  justify-content: center;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 1440px;
  justify-content: space-between;
  gap: 40px;
  align-items: center;
  height: 80px;
  padding: 0px 22px;
`;

const NavLink = styled(Link)`
  font-size: 18px;
`;

const Logo = styled(Link)`
  font-size: 18px;
  margin-right: auto;
`;

const SignUpLink = styled(Link)`
  font-size: 18px;
  border: 1px solid rgba(82, 196, 26, 1);
  border-radius: 5px;
  padding: 10px 15px;
  color: rgba(82, 196, 26, 1);
  transition: all 0.4s ease;

  &:hover {
    color: white;
    background-color: rgba(82, 196, 26, 1);
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
