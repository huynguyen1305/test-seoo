export type PaginationOptions = {
  page: number
}

export type SortOptions<T> = {
  sortBy: keyof T | any
  order: 'asc' | 'desc'
}

export type Pagination = {
  page: number
  total: number
  totalPage: number
  limit: number
}

export type ApiResponse<T> = {
  data: T
  extra: Pagination | any
  status: number
}
