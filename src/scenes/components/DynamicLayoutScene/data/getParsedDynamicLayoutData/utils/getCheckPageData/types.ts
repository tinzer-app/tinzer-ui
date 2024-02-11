import { CheckResult } from '@global/types';
import { OnRunInspection } from '@scenes/components/DynamicLayoutScene/utils';
import { SearchInputItem } from '@components/EditDataModal/components/InputSection/Input/components';

import { GetDataParams } from '../types';

export interface CheckPageData {
  title: string;
  id: string;
  description: string;
  creationTimestamp: Timestamp;
  lastEditionTimestamp: Timestamp;
  lastInspectionTimestamp: Timestamp;
  projects: SearchInputItem[];
  conditions: SearchInputItem[];
  inspectionData: CheckResult;
}

export interface GetCheckPageDataParams extends GetDataParams {
  data: CheckPageData;
  onRunInspection: OnRunInspection;
}
