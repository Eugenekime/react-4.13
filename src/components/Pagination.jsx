import React from "react";

export default function Pagination({
  totalPosts,
  postPerPage,
  setPage,
  currentPage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className="pagination">
        <button onClick={() => setPage((page) => Math.max(page - 1, 1))}>
          &lt;
        </button>
        {pages.map((page, index) => (
          <span
            key={index}
            className={`pagination__num ${
              currentPage === page ? "active" : ""
            }`}
            onClick={() => setPage(page)}
          >
            {page}
          </span>
        ))}
        <button
          onClick={() => setPage((page) => Math.min(page + 1, pages.length))}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
