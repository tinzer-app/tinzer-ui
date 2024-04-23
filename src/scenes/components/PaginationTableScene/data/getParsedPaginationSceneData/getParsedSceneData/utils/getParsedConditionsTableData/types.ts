import { ConditionType } from '@global/types';

export interface ConditionData {
  id: string;
  title: string;
  description: string;
  creationTimestamp: Timestamp;
  lastEditionTimestamp: Timestamp;
  conditionsTypes: ConditionType[];
}
