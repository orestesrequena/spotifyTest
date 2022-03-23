import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import './Pagination.css';

interface Props {
  onPageChange: (page: any) => void;
  totalCount: number;
  currentPage: number;
  pageSize: number;
}

const siblingCount = 1;

export const Pagination = (props: Props) => {
  const { onPageChange, totalCount, currentPage, pageSize } = props;

  const paginationRange = usePagination({
    totalCount,
    siblingCount,
    pageSize,
    currentPage,
  });
  if (currentPage === 0) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange?.[paginationRange.length - 1];
  return (
    <>
      <ul className={'pagination-container pagination-bar'}>
        <li
          className={classnames('pagination-item', {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange?.map((pageNumber, key) => {
          if (pageNumber === DOTS) {
            return (
              <li className="pagination-item dots" key={key}>
                &#8230;
              </li>
            );
          }

          return (
            <li
              className={classnames('pagination-item', {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
              key={key}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className={classnames('pagination-item', {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      </ul>
      <span>Total: {totalCount}</span>
    </>
  );
};

export default Pagination;
