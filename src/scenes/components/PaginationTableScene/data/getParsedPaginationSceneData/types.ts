import { ResponseSceneData, TableSceneData } from './getParsedSceneData';

interface PaginationData {
  pagesCount: number;
  currentPage: number;
}

interface AdditionPaginationTableSceneData {
  paginationData: PaginationData;
}

export type ResponseData = ResponseSceneData & AdditionPaginationTableSceneData;

export interface PaginationTableSceneData extends TableSceneData {
  paginationData: PaginationData;
}
