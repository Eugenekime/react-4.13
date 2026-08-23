import { Link } from 'react-router-dom';
import ArticlePreview from './ArticlePreview';
import { useEffect, useState } from 'react';
import getArticles from '../../api/GET/getArticles';
import Pagination from '../Pagination';
import styled from 'styled-components';
import Banner from '../Banner';
import BarTags from '../BarTags';
import Loader from '../loader/loader';

export default function Articles() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [articlesCount, setArticlesCount] = useState(0);
  const limit = 3;
  const offset = (page - 1) * limit;

  useEffect(() => {
    async function fetchArticles() {
      const data = await getArticles(limit, offset);

      setArticlesCount(data.articlesCount);
      setArticles(data.articles);

      setLoading(false);
    }
    fetchArticles();
  }, [offset]);

  if (loading) return <Loader />;

  return (
    <>
      <Banner />
      <Wrapper>
        <BarTags />
        <List>
          {articles.map((obj) => (
            <StyledLink
              to={`/articles/${obj.slug}`}
              key={obj.slug}
            >
              <ArticlePreview article={obj} />
            </StyledLink>
          ))}
        </List>
        <Pagination
          articlesCount={articlesCount}
          limit={limit}
          onPageChange={setPage}
          currentPage={page}
        />
      </Wrapper>
    </>
  );
}

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: auto;
`;
