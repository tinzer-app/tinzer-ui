import {
  ConditionType,
  StringsInFilesMatchingCondition,
  StringsInFilesMatchingFile,
} from '@global/types';

import { InputType } from '../../../../types';
import { getConditions } from '../getConditions';
import { OnAddStringToMatchingConditionParams } from './types';
import { getArrayWithChangedItem } from '../getArrayWithChangedItem';

export const onAddStringToMatchingCondition = ({
  setFormData,
  id,
  pathIdx,
}: OnAddStringToMatchingConditionParams) =>
  setFormData?.(prev => {
    const prevConditions = getConditions(prev, id);

    // он всегда есть, тк колбэк вызывается только при его наличии
    const stringsInFilesMatchingConditionIdx = prevConditions.findIndex(
      ({ type }) => type === ConditionType.stringsInFilesMatching,
    );

    const stringsInFilesMatchingCondition = prevConditions[
      stringsInFilesMatchingConditionIdx
    ] as StringsInFilesMatchingCondition;

    // он всегда есть, тк колбэк вызывается только при его наличии
    const targetParam = stringsInFilesMatchingCondition.params[
      pathIdx
    ] as StringsInFilesMatchingFile;

    const newParam: StringsInFilesMatchingFile = {
      ...targetParam,
      patterns: [...targetParam.patterns, ''],
    };

    const newCondition: StringsInFilesMatchingCondition = {
      ...stringsInFilesMatchingCondition,
      params: getArrayWithChangedItem(stringsInFilesMatchingCondition.params, newParam, pathIdx),
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
