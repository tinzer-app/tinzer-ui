import { InputType } from '@components/EditDataModal';
import { ConditionType, FileExistenceCondition } from '@global/types';

import { getConditions } from '../getConditions';
import { getArrayWithChangedItem } from '../getArrayWithChangedItem';
import { OnAddStringToMatchingConditionParams } from '../onAddStringToMatchingCondition';

export const onDeletePathExistenceCondition = ({
  setFormData,
  id,
  pathIdx,
}: OnAddStringToMatchingConditionParams) =>
  setFormData?.(prev => {
    const prevConditions = getConditions(prev, id);

    // он всегда есть, тк колбэк вызывается только при его наличии
    const existenceConditionIdx = prevConditions.findIndex(
      ({ type }) => type === ConditionType.fileExistence,
    );

    const existenceCondition = prevConditions[existenceConditionIdx] as FileExistenceCondition;

    const newCondition: FileExistenceCondition = {
      ...existenceCondition,
      params: existenceCondition.params.filter((_, idx) => pathIdx !== idx),
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
