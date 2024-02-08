import { OnChangePathExistenceConditionParams } from '../onChangePathExistenceCondition';

export interface OnChangePatternMatchingConditionParams
  extends OnChangePathExistenceConditionParams {
  patternIdx: number;
}
