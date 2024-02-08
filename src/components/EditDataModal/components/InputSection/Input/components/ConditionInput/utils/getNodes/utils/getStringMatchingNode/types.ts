import { ConditionType, StringsInFilesMatchingFile } from '@global/types';

import {
  OnChangePathExistenceCondition,
  OnChangePatternMatchingCondition,
  OnDeletePatternMatchingCondition,
} from '../../types';

export interface GetStringMatchingNodeParams {
  params: StringsInFilesMatchingFile[];
  onAddPathToMatchingCondition: () => void;
  onAddStringToMatchingCondition: (pathIdx: number) => void;
  onChangePathMatchingCondition: OnChangePathExistenceCondition;
  onChangePatternMatchingCondition: OnChangePatternMatchingCondition;
  onDeleteCondition: (type: ConditionType) => void;
  onDeletePathMatchingCondition: (pathIdx: number) => void;
  onDeletePatternMatchingCondition: OnDeletePatternMatchingCondition;
}
