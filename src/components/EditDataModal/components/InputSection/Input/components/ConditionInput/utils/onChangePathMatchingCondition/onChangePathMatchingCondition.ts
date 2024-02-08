import { InputType } from '@components/EditDataModal';
import { ConditionType, StringsInFilesMatchingCondition } from '@global/types';

import { getConditions } from '../getConditions';
import { getArrayWithChangedItem } from '../getArrayWithChangedItem';
import { OnChangePathExistenceConditionParams } from '../onChangePathExistenceCondition';

export const onChangePathMatchingCondition = ({
  setFormData,
  id,
  pathIdx,
  newValue,
}: OnChangePathExistenceConditionParams) =>
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
      params: getArrayWithChangedItem(
        stringsInFilesMatchingCondition.params,
        {
          ...stringsInFilesMatchingCondition.params[pathIdx],
          path: newValue,
        },
        pathIdx,
      ),
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
