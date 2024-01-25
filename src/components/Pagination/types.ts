export interface PaginationProps {
  initPage: number;
  pagesCount: number;
  onPageChange: (pageNumber: number) => void;
  className?: string;
}
