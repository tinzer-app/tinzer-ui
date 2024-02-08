import { ConditionType } from '@global/types';

import { OnAddConditionParams } from '../onAddCondition';

export interface OnDeleteConditionParams extends OnAddConditionParams {
  type: ConditionType;
}
