import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

export default function Loader() {
  return (
    <Wrapper>
      <Container>
        <LoaderIcon icon={faArrowRotateRight} />
        <Text>loading</Text>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  margin-top: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoaderIcon = styled(FontAwesomeIcon)`
  width: 64px;
  height: 64px;
  color: ${({ theme }) => theme.colors.green};
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Text = styled.p`
  font-size: 32px;
  font-family: "Titillium Web";
  color: ${({ theme }) => theme.colors.green};
`;
