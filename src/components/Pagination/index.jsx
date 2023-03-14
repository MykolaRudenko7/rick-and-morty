import React from 'react';
import ReactPaginate from 'react-paginate';
//
import { PageContext } from '../../App';
//
import style from './Pagination.module.scss';
//
//
//
//
//
export const Pagination = () => {
  // дістаю з провайдера дані про номер стр і.т.д
  const { info, currentPage, setCurrentPage } = React.useContext(PageContext);

  // скрол вверх
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ReactPaginate
      className={style.paginate}
      // к-сть сторінок
      pageCount={info?.pages}
      breakLabel="..."
      nextLabel="→"
      previousLabel="←"
      onPageChange={(data) => {
        setCurrentPage(data.selected + 1);
        scrollToTop();
      }}
      pageRangeDisplayed={2}
      forcePage={currentPage - 1}
      marginPagesDisplayed={1}
    />
  );
};
