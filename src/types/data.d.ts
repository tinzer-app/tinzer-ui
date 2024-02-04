/**
 * ISO8601(YYYY-MM-DD hh:mm:ss) format
 *
 * @example '2000-10-31T01:30:00'
 */
declare type Timestamp = string;

declare type GenericCondition<T, P> = {
  type: T;
  params: P;
  id: string;
};

declare type GenericData<T, D, A = unknown> = {
  type: T;
  data: D;
} & A;
