import { CheckResult } from '@global/types';
import { SearchInputItem } from '@components/EditDataModal/components/InputSection/Input/components';

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
