import { OnDeleteItem } from '@scenes/components/DynamicLayoutScene/utils';

export interface GetDataParams {
  onModalOpen: () => void;
  onDeleteItem: OnDeleteItem;
}
