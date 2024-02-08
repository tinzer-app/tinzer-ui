import {
  ConditionType,
  StringsInFilesMatchingCondition,
  StringsInFilesMatchingFile,
} from '@global/types';
import { InputType } from '@components/EditDataModal';

import { getConditions } from '../getConditions';
import { getArrayWithChangedItem } from '../getArrayWithChangedItem';
import { OnChangePatternMatchingConditionParams } from './types';
export const onChangePatternMatchingCondition = ({
  setFormData,
  id,
  pathIdx,
  patternIdx,
  newValue,
}: OnChangePatternMatchingConditionParams) =>
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
      patterns: getArrayWithChangedItem(targetParam.patterns, newValue, patternIdx),
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
