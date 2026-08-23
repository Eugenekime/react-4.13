import styled from 'styled-components';
import Like from '../buttons/like';
import ArticleAuthor from '../ArticleAuthor';

export default function ArticlePreview({ article }) {
  return (
    <Card>
      <Top>
        <ArticleAuthor
          author={article.author}
          createdAt={article.createdAt}
        />
        <Like likeCount={article.favoritesCount} />
      </Top>
      <MainContainer>
        <Title>{article.title}</Title>
        <Description>{article.description}</Description>
        <TagContainer>
          {article.tagList.map((tag, i) =>
            tag ? <Tag key={i}>{tag}</Tag> : <div key={i} />
          )}
        </TagContainer>
      </MainContainer>
    </Card>
  );
}

// Styles

const Card = styled.li`
  width: 800px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  gap: 10px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 10px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  gap: 16px;
`;

const Title = styled.p`
  font-family: 'Titillium Web';
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.black};
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0%;
  color: ${({ theme }) => theme.colors.grey};
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.p`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.grey};
  border-radius: 12px;
  padding: 6px 16px;
  font-size: 12.8px;
  font-weight: 600;
`;
