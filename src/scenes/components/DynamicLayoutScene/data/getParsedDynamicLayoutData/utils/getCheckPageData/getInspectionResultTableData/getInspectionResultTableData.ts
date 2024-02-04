import { getTagDataOfReportResult } from '@global/utils';
import { CellTypes, TableData, TableCellData, TableHeaderData } from '@components/Table';
import { CheckResult, ConditionType, SingleParamConditionData } from '@global/types';

const getStringifiedCondition = (condition: SingleParamConditionData): string => {
  switch (condition.type) {
    case ConditionType.fileExistence: {
      return `наличие \n ${condition.params}`;
    }

    case ConditionType.stringsInFilesMatching: {
      return `наличие строки \n ${condition.params.pattern} \nв \n${condition.params.path}`;
    }

    default: {
      return '';
    }
  }
};

export const getInspectionResultTableData = ({
  details: { conditions, projectsInspections },
}: CheckResult): TableData => ({
  headers: [
    {
      title: '',
    },
    {
      title: 'общий статус',
      isWithWordWrap: true,
    },
  ].concat(
    conditions.map(condition => ({
      title: getStringifiedCondition(condition),
      isWithWordWrap: true,
    })),
  ) as TableHeaderData[],
  rows: projectsInspections.map(({ project, status, conditionsStatuses }) => ({
    id: project.id,
    cells: [
      {
        type: CellTypes.link,
        data: {
          to: `/projects/${project.id}`,
          title: project.title,
          isInNewTab: false,
        },
      },
      {
        type: CellTypes.tag,
        data: getTagDataOfReportResult(status),
      },
    ].concat(
      conditionsStatuses.map(conditionStatus => ({
        type: CellTypes.tag,
        data: getTagDataOfReportResult(conditionStatus),
      })),
    ) as TableCellData[],
  })),
});
