export interface UseItemMutationParams<QueryParamsType> {
  mutationFn: (params: QueryParamsType) => Promise<void>;
  onSuccessMutation: () => void;
  getSnackbarTitle: (params: { params: QueryParamsType; success: boolean }) => string;
}
