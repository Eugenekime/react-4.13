import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getSingleArticle from "../../api/GET/getSingleArticle";
import Loader from "../loader/loader";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import TagList from "../TagList";
import ArticleAuthor from "../ArticleAuthor";

export default function SingleArticle() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSlug = async () => {
      try {
        const response = await getSingleArticle(slug);
        setData(response.article);
      } catch {
        setError(true);
      }
    };
    fetchSlug();
  }, [slug]);

  if (error) return <Navigate to="*" replace />;
  if (!data) return <Loader />;

  return (
    <>
      <Banner>
        <InnerContainerOfBanner>
          <Title>{data.title}</Title>
          <ArticleAuthor author={data.author} createdAt={data.createdAt} />
        </InnerContainerOfBanner>
      </Banner>

      <MainContainer>
        <Description>
          <ReactMarkdown>{data.body}</ReactMarkdown>
        </Description>
        <TagList newTags={data.tagList} />
      </MainContainer>
    </>
  );
}

// Styles
const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  padding: 48px 0px;
  margin-top: 118px;
`;

const InnerContainerOfBanner = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
`;
const Title = styled.p`
  font-family: "Titillium Web";
  font-size: 46px;
  font-weight: 700;
  line-height: 40px;
  color: white;
`;

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding: 24px 16px;
  gap: 24px;
  width: 800px;
`;

const Description = styled.div`
  * {
    font-size: 16px;
    line-height: 24px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.black};
    margin: 0;
  }

  pre {
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
`;
