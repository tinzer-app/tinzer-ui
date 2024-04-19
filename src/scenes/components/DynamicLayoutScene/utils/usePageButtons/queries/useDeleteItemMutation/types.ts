import { ItemType } from '@global/types';

export interface DeleteItemQueryParams {
  id: string;
  itemType: ItemType;
}

export interface UseDeleteItemMutationParams {
  onSuccessFetch: () => void;
}
