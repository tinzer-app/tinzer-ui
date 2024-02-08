import { OnAddStringToMatchingConditionParams } from '../onAddStringToMatchingCondition';

export interface OnDeletePatternMatchingConditionParams
  extends OnAddStringToMatchingConditionParams {
  patternIdx: number;
}
