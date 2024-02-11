import { DeleteItemQueryParams, RunInspectionQueryParams } from './queries';

export type OnRunInspection = (params: RunInspectionQueryParams) => void;
export type OnDeleteItem = (params: DeleteItemQueryParams) => void;
