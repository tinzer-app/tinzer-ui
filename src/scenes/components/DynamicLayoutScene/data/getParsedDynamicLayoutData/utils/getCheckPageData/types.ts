import { CheckResult } from '@global/types';

export interface CheckPageData {
  title: string;
  id: string;
  description: string;
  creationTimestamp: Timestamp;
  lastEditionTimestamp: Timestamp;
  lastExecutionTimestamp: Timestamp;
  checkResult: CheckResult;
}
