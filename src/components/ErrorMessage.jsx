import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
export default function ErrorMessage({ message = 'data' }) {
  return (
    <Wrapper>
      <Card>
        <ErrorIcon icon={faTriangleExclamation} />
        <Text>
          Something went wrong.
          <br />
          We couldn't load the {message}.
          <br />
          Please try again later.
        </Text>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 10%;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1280px;
  justify-content: center;
  align-items: center;
`;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  gap: 10px;
`;

const ErrorIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.red};
  width: 50px;
  height: 50px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 50%;
`;

const Text = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;
