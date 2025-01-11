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

    //Previous button!

    items.push(
      <Pagination.Prev
        key="prev"
        disabled={pageNumber === 1}
        onClick={() => setPageNumber(pageNumber - 1)}
      >
        <strong>&lt;</strong>Prev
      </Pagination.Prev>
    );

    //First Page!
    items.push(
      <Pagination.Item
        key={1}
        active={pageNumber === 1}
        onClick={() => setPageNumber(1)}
      >
        1
      </Pagination.Item>
    );

    let maxMiddlePages = maxDisplayedPages - 2;
    let halfRange = Math.floor(maxMiddlePages / 2);
    let startPage = Math.max(2, pageNumber - halfRange);
    let endPage = Math.min(totalPages, startPage + maxMiddlePages - 1);

    if (endPage === totalPages - 1) {
      startPage = Math.max(2, totalPages - maxMiddlePages);
    }

    //ellipses!

    if (startPage > 2) {
      items.push(<Pagination.Ellipsis key="ellipsis-start" disabled />);
    }

    //middle pages!

    for (let page = startPage; page <= endPage - 1; page++) {
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

    if (endPage < totalPages - 1) {
      items.push(<Pagination.Ellipsis key="ellipsis-end" disabled />);
    }
    //last page

    items.push(
      <Pagination.Item
        key={totalPages}
        active={pageNumber === totalPages}
        onClick={() => setPageNumber(totalPages)}
      >
        {totalPages}
      </Pagination.Item>
    );

    //next button

    items.push(
      <Pagination.Next
        key="next"
        disabled={pageNumber === totalPages}
        onClick={() => setPageNumber(pageNumber + 1)}
      >
        Next<strong>&gt;</strong>
      </Pagination.Next>
    );
    //theme
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
