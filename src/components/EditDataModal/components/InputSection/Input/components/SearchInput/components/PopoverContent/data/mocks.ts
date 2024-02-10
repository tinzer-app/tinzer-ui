import { ResponseData } from './types';

const MOCK_PROJECTS: ResponseData = {
  items: [
    {
      title: 'date-fns',
      id: 'date-fns',
    },
    {
      title: 'проект',
      id: 'проект',
    },
    {
      title: 'local-ui',
      id: 'local-ui',
    },
    {
      title: 'filter-hooks',
      id: 'filter-hooks',
    },
    {
      title: 'продукт 1',
      id: 'продукт 1',
    },
    {
      title: 'продукт 2',
      id: 'продукт 2',
    },
  ],
};

const MOCK_CONDITIONS: ResponseData = {
  items: [
    {
      title: 'актуальная версия React',
      id: 'react-version',
    },
    {
      title: 'наличие README',
      id: 'readme-exist',
    },
  ],
};

export const getMockData = (endpoint: string) =>
  endpoint === 'modal/projects' ? MOCK_PROJECTS : MOCK_CONDITIONS;
