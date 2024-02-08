import { ConditionData, ConditionType } from '@global/types';

import { OnChangePathExistenceConditionParams } from '../onChangePathExistenceCondition';
import { OnChangePatternMatchingConditionParams } from '../onChangePatternMatchingCondition';
import { OnDeletePatternMatchingConditionParams } from '../onDeletePatternMatchingCondition';

export type OnChangePathExistenceCondition = (
  params: Omit<OnChangePathExistenceConditionParams, 'setFormData' | 'id'>,
) => void;
export type OnChangePatternMatchingCondition = (
  params: Omit<OnChangePatternMatchingConditionParams, 'setFormData' | 'id'>,
) => void;
export type OnDeletePatternMatchingCondition = (
  params: Omit<OnDeletePatternMatchingConditionParams, 'setFormData' | 'id'>,
) => void;

export interface GetNodesParams {
  conditions: ConditionData[];
  onAddPathToMatchingCondition: () => void;
  isPossibleToAddCondition: boolean;
  onAddCondition: () => void;
  onAddPathToExistenceCondition: () => void;
  onAddStringToMatchingCondition: (pathIdx: number) => void;
  onChangePathExistenceCondition: OnChangePathExistenceCondition;
  onChangePathMatchingCondition: OnChangePathExistenceCondition;
  onChangePatternMatchingCondition: OnChangePatternMatchingCondition;
  onDeleteCondition: (type: ConditionType) => void;
  onDeletePathExistenceCondition: (pathIdx: number) => void;
  onDeletePathMatchingCondition: (pathIdx: number) => void;
  onDeletePatternMatchingCondition: OnDeletePatternMatchingCondition;
}
