import { ConditionData } from './conditions';

interface ProjectData {
  title: string;
  id: string;
}

interface ProjectCheck {
  project: ProjectData;
  status: InspectionStatus;
  conditionsStatuses: InspectionStatus[];
}

interface CheckStatusDetails {
  conditions: ConditionData[];
  projectsInspections: ProjectCheck[];
}

export interface CheckResult {
  status: InspectionStatus;
  details: CheckStatusDetails;
}

export enum InspectionStatus {
  success = 'success',
  fail = 'fail',
  inProgress = 'inProgress',
}
