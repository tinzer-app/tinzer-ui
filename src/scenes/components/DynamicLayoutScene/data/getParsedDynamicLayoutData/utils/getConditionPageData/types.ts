import { ConditionData } from '@global/types';

export interface ConditionPageData {
  title: string;
  id: string;
  description: string;
  creationTimestamp: Timestamp;
  lastEditionTimestamp: Timestamp;
  conditions: ConditionData[];
}
