import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../baseUrl';


export const makeErrorMessage = (error) => {
  try {
    if (error.response?.status === 404) {
      return error.response?.data.message || 'Resource not found';
    }

    if (error.response?.status === 401) {
      return 'Not authorized';
    }

    if (error?.response?.data?.message) {
      return error?.response?.data?.message;
    }

    if (error?.response?.data?.errors) {
      return JSON.stringify(Object.values(error.response?.data?.errors)[0])
        .replaceAll('"', '')
        .replaceAll('[', '')
        .replaceAll(']', '');
    }

    return `${error?.message}` || 'Something went wrong';
  } catch (err) {
    return err;
  }
};

export default function useFetch(
  name,
  path,
  args
) {
  const {
    isLoading,
    isSuccess,
    isError,
    isFetching: isRefreshing,
    data,
    error,
    refetch
  } = useQuery(
    name,
    async () => {
      const res = await axiosInstance.get(path);
      return res.data;
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: () => false,
      ...args,
      ...(args?.onError && {
        onError: (err) =>
          args?.onError({
            message: makeErrorMessage(err),
            statusCode: err.response?.status
          })
      })
    }
  );
  return {
    isLoading,
    isRefreshing,
    isSuccess,
    isError,
    data,
    refetch,
    error: {
      message: error ? makeErrorMessage(error) : '',
      statusCode: (error)?.response?.status || 0
    }
  };
}
