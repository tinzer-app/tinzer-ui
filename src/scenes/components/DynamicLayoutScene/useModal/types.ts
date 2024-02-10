import { ResponseData } from '../data';

export interface UseModalParams {
  refetch: () => void;
  responseData?: ResponseData;
}
