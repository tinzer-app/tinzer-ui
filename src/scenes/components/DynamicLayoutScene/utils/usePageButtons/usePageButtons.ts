import { useNavigate } from 'react-router-dom';

import {
  DeleteItemQueryParams,
  RunInspectionQueryParams,
  useDeleteItemMutation,
  useRunInspectionMutation,
} from './queries';

export const usePageButtons = () => {
  const navigate = useNavigate();

  const onSuccessDelete = () => navigate('..');

  const runInspectionMutation = useRunInspectionMutation();
  const deleteItemMutation = useDeleteItemMutation({ onSuccessFetch: onSuccessDelete });

  const onRunInspection = (params: RunInspectionQueryParams) =>
    runInspectionMutation.mutate(params);

  const onDeleteItem = (params: DeleteItemQueryParams) => deleteItemMutation.mutate(params);

  return { onRunInspection, onDeleteItem };
};
