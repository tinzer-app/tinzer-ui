import { RunInspectionQueryParams, useRunInspectionMutation } from './queries';

export const usePageButtons = () => {
  const runInspectionMutation = useRunInspectionMutation();

  const onRunInspection = (patams: RunInspectionQueryParams) =>
    runInspectionMutation.mutate(patams);

  return { onRunInspection };
};
