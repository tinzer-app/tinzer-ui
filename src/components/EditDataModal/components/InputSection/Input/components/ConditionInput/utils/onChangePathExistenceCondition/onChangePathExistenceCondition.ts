import { ConditionType, FileExistenceCondition } from '@global/types';

import { InputType } from '../../../../types';
import { getConditions } from '../getConditions';
import { getArrayWithChangedItem } from '../getArrayWithChangedItem';
import { OnChangePathExistenceConditionParams } from './types';

export const onChangePathExistenceCondition = ({
  setFormData,
  id,
  pathIdx,
  newValue,
}: OnChangePathExistenceConditionParams) =>
  setFormData?.(prev => {
    const prevConditions = getConditions(prev, id);

    // он всегда есть, тк колбэк вызывается только при его наличии
    const existenceConditionIdx = prevConditions.findIndex(
      ({ type }) => type === ConditionType.fileExistence,
    );

    const existenceCondition = prevConditions[existenceConditionIdx] as FileExistenceCondition;

    const newCondition: FileExistenceCondition = {
      ...existenceCondition,
      params: getArrayWithChangedItem(existenceCondition.params, newValue, pathIdx),
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
