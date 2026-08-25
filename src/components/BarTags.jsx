import styled from 'styled-components';
import { useState, useEffect } from 'react';
import getTags from '../api/GET/getTags.js';
import TagList from './TagList.jsx';

export default function BarTags() {
  const [error, setError] = useState(false);
  const [tags, setTags] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    async function fetchTags() {
      try {
        const data = await getTags();
        setTags(data.tags);
      } catch {
        setError(true);
      }
    }

    fetchTags();
  }, []);

  return (
    <Container $toggle={toggle}>
      <Title>Popular tags</Title>
      {error ? (
        <ErrorText>Something went wrong. We couldn't load the tags.</ErrorText>
      ) : (
        <TagList newTags={toggle ? tags : tags.slice(0, 7)} />
      )}
      {error ? (
        <></>
      ) : (
        <ButtonContainer>
          <CloseOpenButton onClick={() => setToggle(!toggle)}>
            {toggle ? 'Hide' : 'Show more'}
          </CloseOpenButton>
        </ButtonContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 12px;
  gap: 12px;
  margin: 20px 0 16px 0;
  width: 800px;
`;

const Title = styled.p`
  font-family: 'Titillium Web';
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const CloseOpenButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 8px;
  padding: 4px 8px;
  background-color: white;
  color: ${({ theme }) => theme.colors.green};
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.green};
  }
`;

const ErrorText = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
`;
