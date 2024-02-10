export interface SearchInputItem {
  id: string;
  title: string;
}

export interface SearchItemProps {
  data: SearchInputItem;
  onItemDelete: (id: string) => void;
  className?: string;
}
