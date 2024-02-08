import { ConditionType, StringsInFilesMatchingCondition } from '@global/types';

import { InputType } from '../../../../types';
import { getConditions } from '../getConditions';
import { OnAddConditionParams } from '../onAddCondition';
import { getArrayWithChangedItem } from '../getArrayWithChangedItem';

export const onAddPathToMatchingCondition = ({ setFormData, id }: OnAddConditionParams) =>
  setFormData?.(prev => {
    const prevConditions = getConditions(prev, id);

    // он всегда есть, тк колбэк вызывается только при его наличии
    const stringsInFilesMatchingConditionIdx = prevConditions.findIndex(
      ({ type }) => type === ConditionType.stringsInFilesMatching,
    );

    const stringsInFilesMatchingCondition = prevConditions[
      stringsInFilesMatchingConditionIdx
    ] as StringsInFilesMatchingCondition;

    const newCondition: StringsInFilesMatchingCondition = {
      ...stringsInFilesMatchingCondition,
      params: [...stringsInFilesMatchingCondition.params, { path: '', patterns: [''] }],
    };

    return {
      ...prev,
      [id]: {
        type: InputType.condition,
        data: {
          conditions: getArrayWithChangedItem(
            prevConditions,
            newCondition,
            stringsInFilesMatchingConditionIdx,
          ),
        },
      },
    };
  });
