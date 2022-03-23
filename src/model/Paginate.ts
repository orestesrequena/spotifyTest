export interface Paginate {
  offset: number;
  limit: number;
  count: number;
}

export const defaultPagination: Paginate = { count: 0, offset: 0, limit: 10 };
