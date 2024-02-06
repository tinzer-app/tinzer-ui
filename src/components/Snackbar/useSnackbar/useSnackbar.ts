import { useState } from 'react';

export const useSnackbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = (_: any, reason?: string) => {
    if (reason !== 'clickaway') {
      setIsOpen(false);
    }
  };

  return { isOpen, onOpen, onClose };
};
