import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <Wrapper>
      <Container>
        <MainText>Real World Blog</MainText>
        <SecondText>A place to share your knowledge.</SecondText>
      </Container>
    </Wrapper>
  );
}

export default Banner;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 190px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.green};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainText = styled(Link)`
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  font-family: 'Titillium Web';
  color: white;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 6px;
`;

const SecondText = styled.p`
  color: white;
  font-size: 24px;
`;
