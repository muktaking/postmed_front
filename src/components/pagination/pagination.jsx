import React from "react";
import { Pagination } from "react-bootstrap";


const pagination = ({ itemsCount, pageSize, onPageHandler, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const items = [];
  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <Pagination.Item
        key={number}
        onClick={() => {
          onPageHandler(number);
        }}
        active={number === currentPage}
        className="my-2 mr-2 text-center"
        style={{width:"40px",height:'30px'}}
      >
        {number}
      </Pagination.Item>
    );
  }
  return <Pagination className="justify-content-start align-content-start flex-wrap" >{items}</Pagination>;
};

export default pagination;
