import { ConditionType, FileExistenceCondition } from '@global/types';

import { InputType } from '../../../../types';
import { getConditions } from '../getConditions';
import { OnAddConditionParams } from '../onAddCondition';
import { getArrayWithChangedItem } from '../getArrayWithChangedItem';

export const onAddPathToExistenceCondition = ({ setFormData, id }: OnAddConditionParams) =>
  setFormData?.(prev => {
    const prevConditions = getConditions(prev, id);

    // он всегда есть, тк колбэк вызывается только при его наличии
    const existenceConditionIdx = prevConditions.findIndex(
      ({ type }) => type === ConditionType.fileExistence,
    );

    const existenceCondition = prevConditions[existenceConditionIdx] as FileExistenceCondition;

    const newCondition: FileExistenceCondition = {
      ...existenceCondition,
      params: [...existenceCondition.params, ''],
    };

    return {
      ...prev,
      [id]: {
        type: InputType.condition,
        data: {
          conditions: getArrayWithChangedItem(prevConditions, newCondition, existenceConditionIdx),
        },
      },
    };
  });
