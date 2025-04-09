import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ArticlePreview from "./ArticlePreview";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export default function Blog() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSlug = async () => {
      const response = await fetch(
        `https://realworld.habsidev.com/api/articles/${slug}`
      );
      if (response.status !== 200) return setError(true);
      const res = await response.json();
      setData(res.article);
    };
    fetchSlug();
  }, [slug]);

  if (error) return <Navigate to="*" replace />;
  if (!data) return <Loader />;

  return (
    <Container>
      <ArticlePreview article={data} noShadow />
      <Description>
        <ReactMarkdown>{data.description}</ReactMarkdown>
      </Description>
    </Container>
  );
}

// Styles
const Container = styled.div`
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 0 auto;
  width: 938px;
  min-height: 140px;
  background-color: white;
`;

const Loader = styled.div`
  margin-top: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
