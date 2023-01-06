import { EmailRequestDto, MyReportsQueryOptions, ReportsPaginator } from '@/types';
import { useInfiniteQuery,useMutation } from 'react-query';
import client from './client';
import { API_ENDPOINTS } from './client/api-endpoints';
import { mapPaginatorData } from './utils/data-mappers';
 

export function useMyReports(options?: MyReportsQueryOptions) {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery<ReportsPaginator, Error>(
    [API_ENDPOINTS.MY_REPORTS, options],
    ({ queryKey, pageParam }) =>
      client.myReports.all(Object.assign({}, queryKey[1], pageParam)),
    {
      getNextPageParam: ({ current_page, last_page }) =>
        last_page > current_page && { page: current_page + 1 },
    }
  );
  function handleLoadMore() {
    fetchNextPage();
  }
  return {
    reports: data?.pages?.flatMap((page) => page.data) ?? [],
    paginatorInfo: Array.isArray(data?.pages)
      ? mapPaginatorData(data?.pages[data.pages.length - 1])
      : null,
    isLoading,
    error,
    isFetching,
    isLoadingMore: isFetchingNextPage,
    loadMore: handleLoadMore,
    hasMore: Boolean(hasNextPage),
  };
}

export function useSendNotification() {
 
  const { mutate: sendNotification, isLoading } = useMutation(client.myReports.sendmail, {
    onSuccess: (data) => {
      console.log("Send Notification to =>",data);
       
    },
    onError: (error) => {
      console.log("Error :Send Notification to =>",error);
    },
  });

  function formatOrderInput(input: EmailRequestDto) {
     
    const formattedInputs = {
      ...input,
       
    };
    sendNotification(formattedInputs);
  }
  return {
    sendNotification: formatOrderInput
  };
}