import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  let token = false;
  return (
    <>
      <Head>
        <Logo to="articles">Realworld Blog</Logo>
        {token ? (
          <Nav>
            <NavLink to="articles">Home</NavLink>
            <IconContainer>
              <Icons icon={faPen} />
              <NavLink to="#">New Post</NavLink>
            </IconContainer>
            <IconContainer>
              <Icons icon={faGear} />
              <NavLink to="#">Settings</NavLink>
            </IconContainer>
            <IconContainer>
              <Icons icon={faUser} />
              <NavLink to="#">Profile</NavLink>
            </IconContainer>
          </Nav>
        ) : (
          <Nav>
            <NavLink to="articles">Home</NavLink>
            <NavLink to="#">Sign In</NavLink>
            <NavLink to="#">Sign Up</NavLink>
          </Nav>
        )}
      </Head>
    </>
  );
}

// styles
const Head = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1280px;
  height: 54px;
  padding: 0px 15px;
  margin: 0 auto;
  background-color: white;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 400;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  font-family: "Titillium Web";
  color: ${({ theme }) => theme.colors.green};
`;

const Icons = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.green};
  width: 12px;
  height: 12px;
`;
