import React from "react";
import Pagination from "react-bootstrap/Pagination";

function CustomPagination({
  pageNumber,
  totalPages,
  maxDisplayedPages,
  setPageNumber,
}) {
  return (() => {
    let items = [];

    items.push(
      <Pagination.Item
        key={1}
        active={pageNumber === 1}
        onClick={() => setPageNumber(1)}
      >
        1
      </Pagination.Item>
    );

    const pagesToShow = Math.min(totalPages - 2, maxDisplayedPages - 2);

    for (let page = 2; page <= totalPages - 1; page++) {
      if (items.length < pagesToShow + 2) {
        items.push(
          <Pagination.Item
            key={page}
            active={page === pageNumber}
            onClick={() => setPageNumber(page)}
          >
            {page}
          </Pagination.Item>
        );
      }
    }

    return (
      <div>
        <Pagination data-bs-theme="dark">{items}</Pagination>
      </div>
    );
  })();
}

export default CustomPagination;

// Make a reuseable pagination component, with stuff passed into it. Import react pagination in here. Set it up with ellipses, arrows, etc. Will have conditional rendering for when
//ellipses will show. Have it so that page 1 is always visible.
