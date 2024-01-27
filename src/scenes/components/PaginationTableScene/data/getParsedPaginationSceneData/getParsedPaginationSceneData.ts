import { getParsedSceneData } from './getParsedSceneData';
import { PaginationTableSceneData, ResponseData } from './types';

export const getParsedPaginationSceneData = (
  responseData?: ResponseData | null,
): PaginationTableSceneData | null => {
  const { paginationData } = responseData || {};

  const sceneData = getParsedSceneData(responseData);

  if (!(sceneData && paginationData)) {
    return null;
  }

  return {
    paginationData,
    ...sceneData,
  };
};
