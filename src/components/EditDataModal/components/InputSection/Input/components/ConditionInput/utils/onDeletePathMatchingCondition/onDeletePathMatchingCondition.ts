import { InputType } from '@components/EditDataModal';
import { ConditionType, StringsInFilesMatchingCondition } from '@global/types';

import { getConditions } from '../getConditions';
import { getArrayWithChangedItem } from '../getArrayWithChangedItem';
import { OnAddStringToMatchingConditionParams } from '../onAddStringToMatchingCondition';

export const onDeletePathMatchingCondition = ({
  setFormData,
  id,
  pathIdx,
}: OnAddStringToMatchingConditionParams) =>
  setFormData?.(prev => {
    const prevConditions = getConditions(prev, id);

    // он всегда есть, тк колбэк вызывается только при его наличии
    const existenceConditionIdx = prevConditions.findIndex(
      ({ type }) => type === ConditionType.stringsInFilesMatching,
    );

    const existenceCondition = prevConditions[
      existenceConditionIdx
    ] as StringsInFilesMatchingCondition;

    const newCondition: StringsInFilesMatchingCondition = {
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
