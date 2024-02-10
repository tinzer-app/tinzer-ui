type QueryCallback<QueryParamsType> = (params: QueryParamsType) => void;

export interface UseItemQueryParams<QueryParamsType> {
  mutationFn: (params: QueryParamsType) => Promise<void>;
  onErrorFetch: QueryCallback<QueryParamsType>;
  onSuccessFetch: QueryCallback<QueryParamsType>;
}
