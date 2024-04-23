import { useNavigate } from 'react-router-dom';

import {
  DeleteItemQueryParams,
  RunInspectionQueryParams,
  useDeleteItemMutation,
  useRunInspectionMutation,
} from './queries';
import { UsePageButtonsParams } from './types';

export const usePageButtons = ({ onSuccessInspection }: UsePageButtonsParams) => {
  const navigate = useNavigate();

  const onSuccessDelete = () => navigate(-1);

  const runInspectionMutation = useRunInspectionMutation({ onSuccessFetch: onSuccessInspection });
  const deleteItemMutation = useDeleteItemMutation({ onSuccessFetch: onSuccessDelete });

  const onRunInspection = (params: RunInspectionQueryParams) =>
    runInspectionMutation.mutate(params);

  const onDeleteItem = (params: DeleteItemQueryParams) => deleteItemMutation.mutate(params);

  return { onRunInspection, onDeleteItem };
};
