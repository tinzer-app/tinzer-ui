import { ConditionData, ConditionType } from '@global/types';

import { InputType } from '../../../../types';
import { getConditions } from '../getConditions';
import { AVAILABLE_CONDITION_TYPES } from '../../constants';
import { OnAddConditionParams } from './types';

const getDefaultParams = (conditionType: ConditionType) => {
  switch (conditionType) {
    case ConditionType.stringsInFilesMatching: {
      return [
        {
          path: '',
          patterns: [''],
        },
      ];
    }

    default: {
      return [''];
    }
  }
};

export const onAddCondition = ({ id, setFormData }: OnAddConditionParams) =>
  setFormData?.(prev => {
    const prevConditions = getConditions(prev, id);

    const newEnumType = AVAILABLE_CONDITION_TYPES.find(
      availableType => !prevConditions.find(({ type }) => availableType === type),
    ) as ConditionType;

    const newCondition = {
      type: newEnumType,
      id,
      params: getDefaultParams(newEnumType),
    } as ConditionData;

    return {
      ...prev,
      [id]: {
        type: InputType.condition,
        data: {
          conditions: [...prevConditions, newCondition],
        },
      },
    };
  });
