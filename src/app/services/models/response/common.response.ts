export interface CommonResponse<T> {
  count: number;
  data: Array<T>;
  page: number;
  pageSize: number;
  totalCount: number;
}
