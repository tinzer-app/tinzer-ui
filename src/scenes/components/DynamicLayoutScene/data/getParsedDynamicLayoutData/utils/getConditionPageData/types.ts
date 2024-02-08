import { GeneralConditionData } from '@global/types';

export interface ConditionPageData extends GeneralConditionData {
  id: string;
  creationTimestamp: Timestamp;
  lastEditionTimestamp: Timestamp;
}
