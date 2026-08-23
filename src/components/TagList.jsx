import styled from 'styled-components';

export default function TagList({ newTags = [] }) {
  return (
    <ContainerTags>
      {newTags.map((item) => (
        <SingleTag key={item}>{item}</SingleTag>
      ))}
    </ContainerTags>
  );
}

const ContainerTags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

const SingleTag = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 12px;
  font-size: 12.8px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.grey};
  padding: 6px 16px;
  text-align: center;
  background-color: white;
  line-height: 100%;
  cursor: pointer;
`;
