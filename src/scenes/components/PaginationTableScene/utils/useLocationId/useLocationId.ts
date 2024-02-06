import { useLocation } from 'react-router-dom';

export const useLocationId = () => {
  const { pathname } = useLocation();

  return pathname.split('/')[1];
};
