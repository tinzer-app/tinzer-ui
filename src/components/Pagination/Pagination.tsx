import React, { FC, useEffect, useState } from 'react';

import { PaginationProps } from './types';
import { PaginationComponent } from './styled';

export const Pagination: FC<PaginationProps> = ({
  initPage,
  pagesCount,
  onPageChange,
  className,
}) => {
  const [currentPage, setCurrentPage] = useState(initPage);

  const onChange = (_: unknown, newPage: number) => {
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  useEffect(() => {
    setCurrentPage(initPage);
  }, [initPage, setCurrentPage]);

  return (
    <footer className={className}>
      <PaginationComponent
        count={pagesCount}
        page={currentPage}
        onChange={onChange}
        siblingCount={2}
        shape="rounded"
        hideNextButton
        hidePrevButton
      />
    </footer>
  );
};
