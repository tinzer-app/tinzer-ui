import { CellTypes } from '@components/Table';
import { TextCellData } from '@components/Table/components/TableRow/TableCellContent/TextCell';

import { PaginationTableSceneData } from './types';

const getRuleTypeColor = (rem: number) => {
  switch (rem) {
    case 0:
      return {
        value: 'наличие файла',
        textColor: 'tagSkyBlueActive',
      };

    case 1:
      return {
        value: 'наличие строки',
        textColor: 'tagMagentaActive',
      };

    default:
      return {
        value: 'значение в поле',
        textColor: 'tagCyanActive',
      };
  }
};

const MOCK_PROJECTS_PAGE_DATA: PaginationTableSceneData = {
  title: 'проекты',
  tableData: {
    headers: [
      {
        title: 'название',
      },
      {
        title: 'описание',
      },
      {
        title: 'время добавления',
      },
      {
        title: 'время последнего изменения',
      },
      {
        title: 'статус последней проверки',
      },
    ],
    rows: Array.from({ length: 10 }).map((_, idx) => ({
      id: idx.toString(),
      cells: [
        {
          type: CellTypes.link,
          data: {
            title: `Проект ${idx}`,
            to: 'https://www.google.com/',
          },
        },
        {
          type: CellTypes.text,
          data: {
            title: {
              value: 'Краткое описание...',
            },
          },
        },
        {
          type: CellTypes.text,
          data: {
            title: {
              value: '10.08.2022',
            },
            subtitles: [
              {
                value: '12:30',
              },
            ],
          },
        },
        {
          type: CellTypes.text,
          data: {
            title: {
              value: '10.08.2022',
            },
            subtitles: [
              {
                value: '12:30',
              },
            ],
          },
        },
        {
          type: CellTypes.tag,
          data: {
            color: idx % 2 === 0 ? 'tagGreen' : 'tagRed',
            title: idx % 2 === 0 ? 'пройдено' : 'не пройдено',
          },
        },
      ],
    })),
  },
};

const MOCK_CONDITIONS_PAGE_DATA: PaginationTableSceneData = {
  title: 'правила',
  tableData: {
    headers: [
      {
        title: 'название',
      },
      {
        title: 'описание',
      },
      {
        title: 'время добавления',
      },
      {
        title: 'время последнего изменения',
      },
      {
        title: 'тип проверки',
      },
    ],
    rows: Array.from({ length: 10 }).map((_, idx) => ({
      id: idx.toString(),
      cells: [
        {
          type: CellTypes.text,
          data: {
            title: {
              value: `правило ${idx}`,
            },
          },
        },
        {
          type: CellTypes.text,
          data: {
            title: {
              value: 'Краткое описание...',
            },
          },
        },
        {
          type: CellTypes.text,
          data: {
            title: {
              value: '10.08.2022',
            },
            subtitles: [
              {
                value: '12:30',
              },
            ],
          },
        },
        {
          type: CellTypes.text,
          data: {
            title: {
              value: '10.08.2022',
            },
            subtitles: [
              {
                value: '12:30',
              },
            ],
          },
        },
        {
          type: CellTypes.text,
          data: {
            title: {
              ...getRuleTypeColor(idx),
              variant: 'body2Semibold',
            },
          } as TextCellData,
        },
      ],
    })),
  },
};

export const MOCK_REPORTS_PAGE_DATA: PaginationTableSceneData = {
  title: 'проверки',
  tableData: {
    headers: [
      {
        title: 'название',
      },
      {
        title: 'описание',
      },
      {
        title: 'время последней проверки',
      },
      {
        title: 'статус последней проверки',
      },
      {
        title: 'кол-во правил',
      },
    ],
    rows: Array.from({ length: 10 }).map((_, idx) => ({
      id: idx.toString(),
      cells: [
        {
          type: CellTypes.text,
          data: {
            title: {
              value: `проверка ${idx}`,
            },
          },
        },
        {
          type: CellTypes.text,
          data: {
            title: {
              value: 'Краткое описание...',
            },
          },
        },
        {
          type: CellTypes.text,
          data: {
            title: {
              value: '10.08.2022',
            },
            subtitles: [
              {
                value: '12:30',
              },
            ],
          },
        },
        {
          type: CellTypes.tag,
          data: {
            color: idx % 2 === 0 ? 'tagGreen' : 'tagRed',
            title: idx % 2 === 0 ? 'пройдено' : 'не пройдено',
          },
        },
        {
          type: CellTypes.text,
          data: {
            title: {
              value: `${idx}`,
            },
          },
        },
      ],
    })),
  },
};

export const getMockData = (endpoint: string) => {
  switch (endpoint) {
    case 'projects': {
      return MOCK_PROJECTS_PAGE_DATA;
    }

    case 'conditions': {
      return MOCK_CONDITIONS_PAGE_DATA;
    }

    default: {
      return MOCK_REPORTS_PAGE_DATA;
    }
  }
};
