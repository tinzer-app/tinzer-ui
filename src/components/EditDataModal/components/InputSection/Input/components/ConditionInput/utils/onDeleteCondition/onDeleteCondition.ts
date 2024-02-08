import { InputType } from '@components/EditDataModal';

import { getConditions } from '../getConditions';
import { OnDeleteConditionParams } from './types';

export const onDeleteCondition = ({ setFormData, id, type }: OnDeleteConditionParams) =>
  setFormData?.(prev => ({
    ...prev,
    [id]: {
      type: InputType.condition,
      data: {
        conditions: getConditions(prev, id).filter(condition => condition.type !== type),
      },
    },
  }));
