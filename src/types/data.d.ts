declare type Timestamp = string;

declare type GenericCondition<T, P> = {
  type: T;
  params: P;
};

declare type GenericData<T, D, A = unknown> = {
  type: T;
  data: D;
} & A;
