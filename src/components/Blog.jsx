import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { format } from "date-fns";
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
      if (response.status !== 200) {
        return setError(true);
      }
      const res = await response.json();
      setData(res.article);
    };
    fetchSlug();
  }, [slug]);

  if (error) {
    return <Navigate to="*" replace />;
  }

  if (!data) {
    return <div className="loader"></div>;
  }

  return (
    <div
      style={{ marginTop: "26px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)" }}
    >
      <li
        className="list"
        style={{
          marginBottom: "0px",
          marginTop: "0px",
          borderBottomRightRadius: "0px",
          borderBottomLeftRadius: "0px",
          boxShadow: "none",
        }}
      >
        <div className="list__left-side">
          <p className="left-side__title">{data.title}</p>
          <div className="left-side__tags">
            {data.tagList.map((tag, idx) => (
              <p key={idx}>{tag}</p>
            ))}
          </div>
          <p>{data.author.bio}</p>
        </div>
        <div className="list__right-side">
          <div className="right-side__profile">
            <span>{data.author.username}</span>
            <span>{format(new Date(data.createdAt), "MMMM d, yyyy")}</span>
          </div>
          <div className="right-side__img">
            <img src={data.author.image} alt="author photo" />
          </div>
        </div>
      </li>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px",
          marginTop: "0px",
          width: "938px",
          minHeight: "140px",
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
      >
        <ReactMarkdown>{data.description}</ReactMarkdown>
      </div>
    </div>
  );
}
