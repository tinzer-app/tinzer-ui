import { ConditionType } from '@global/types';

import { OnChangePathExistenceCondition } from '../../types';

export interface GetFileExistenceNodeParams {
  params: string[];
  onAddPathToExistenceCondition: () => void;
  onChangePathExistenceCondition: OnChangePathExistenceCondition;
  onDeleteCondition: (type: ConditionType) => void;
  onDeletePathExistenceCondition: (pathIdx: number) => void;
}
