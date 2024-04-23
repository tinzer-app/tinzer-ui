import { CheckResult } from '@global/types';
import { OnRunInspection } from '@scenes/components/DynamicLayoutScene/utils';
import { SearchInputItem } from '@components/EditDataModal/components/InputSection/Input/components';

import { GetDataParams } from '../types';

interface LocalCheckResult extends Omit<CheckResult, 'details'> {
  details?: CheckResult['details'] | null;
}

export interface CheckPageData {
  title: string;
  id: string;
  description: string;
  creationTimestamp: Timestamp;
  lastEditionTimestamp: Timestamp;
  projects: SearchInputItem[];
  conditions: SearchInputItem[];
  inspectionData: LocalCheckResult;
  lastInspectionTimestamp?: Timestamp | null;
}

export interface GetCheckPageDataParams extends GetDataParams {
  data: CheckPageData;
  onRunInspection: OnRunInspection;
}
