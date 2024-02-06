export interface SnackbarProps {
  isOpen: boolean;
  onClose: (_?: any, reason?: string) => void;
  title: string;
  icon?: 'success' | 'fail';
}
