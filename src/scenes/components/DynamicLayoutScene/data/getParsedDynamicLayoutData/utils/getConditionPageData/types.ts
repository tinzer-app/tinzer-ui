import { GeneralConditionData } from '@global/types';
import { GetDataParams } from '../types';

export interface ConditionPageData extends GeneralConditionData {
  id: string;
  creationTimestamp: Timestamp;
  lastEditionTimestamp: Timestamp;
}

export interface GetConditionPageDataParams extends GetDataParams {
  data: ConditionPageData;
}
