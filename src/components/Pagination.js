import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  if (pages.length === 1) {
    return null;
  } else {
    return (
      <div>
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={
                page === currentPage
                  ? "pagination-btn pagination-active"
                  : "pagination-btn"
              }
            >
              {page}
            </button>
          );
        })}
      </div>
    );
  }
};

export default Pagination;
