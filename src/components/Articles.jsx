import useFetchData from "../Hooks/useFetchData";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import Pagination from "./Pagination";

export default function Articles() {
  const { totalPosts, currentPosts, page, setPage, postPerPage } =
    useFetchData();

  return (
    <>
      <ul>
        {currentPosts.map((obj) => (
          <Link to={`/articles/${obj.slug}`} key={obj.slug}>
            <li className="list">
              <div className="list__left-side">
                <p className="left-side__title">{obj.title}</p>
                <div className="left-side__tags">
                  {obj.tagList.map((tag, idx) => (
                    <p key={idx}>{tag}</p>
                  ))}
                </div>
                <p>{obj.author.bio}</p>
              </div>
              <div className="list__right-side">
                <div className="right-side__profile">
                  <span>{obj.author.username}</span>
                  <span>{format(new Date(obj.createdAt), "MMMM d, yyyy")}</span>
                </div>
                <div className="right-side__img">
                  <img src={obj.author.image} alt="author photo" />
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <Pagination
        totalPosts={totalPosts}
        postPerPage={postPerPage}
        setPage={setPage}
        currentPage={page}
      />
    </>
  );
}
