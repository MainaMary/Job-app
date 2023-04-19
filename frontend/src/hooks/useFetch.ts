import { type AxiosError } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { FetchResults } from '../types'
import axiosInstance from '../api/baseUrl'


export default function useFetch(
  path: string,
  name: string | string[] | any,
  args?: Record<string, any>,
): FetchResults {
  const {
    isLoading,
    isSuccess,
    isError,
    isFetching: isRefreshing,
    data,
    error,
    refetch,
  } = useQuery(
    name,
    async () => {
      const res = await axiosInstance.get(path)
      return res.data
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      enabled: false,
      retry: () => true,
      ...args,
      ...(args?.onError && {
        onError: (err: AxiosError) =>
          args?.onError({
            message:err,
            statusCode: err.response?.status,
          }),
      }),
    },
  )
  return {
    isLoading,
    isRefreshing,
    isSuccess,
    isError,
    data,
    refetch,
    error: {
      message: error ? error : '',
      statusCode: (error as AxiosError)?.response?.status || 0,
    },
  }
}
