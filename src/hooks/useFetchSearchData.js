import { useCallback, useEffect, useState } from "react";
import apiService from "../services/apiService";

const END_POINT = "/v5.0/search/advance";

const useFetchSearchData = (queries) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [hasFetched, setHasFetched] = useState(false);

  const loadMore = useCallback(() => {
    if (!hasMore || isLoading) return;

    setPage((prev) => prev + 1);
  }, [hasMore, isLoading]);

  useEffect(() => {
    setPage(1);
    setHasMore(true);
    setError(null);
    setIsLoading(false);
    setHasFetched(false);
  }, [queries.query, queries.type]);

  useEffect(() => {
    if (!queries.query) return;
    if (isLoading) return;

    setIsLoading(true);
    setHasFetched(true);
    setError(null);

    const controller = new AbortController();

    apiService({
      endpoint: END_POINT,
      params: {
        page,
        count: 20,
        ...queries,
      },
      signal: controller.signal,
    })
      .then((response) => {
        const responseResult = response.data.result;

        const newItems =
          responseResult?.result_items?.[0]?.groups?.Media?.items || [];
        if (!controller.signal.aborted) {
          if (page === 1) {
            setData([...newItems]);
          } else {
            setData((prev) => [...prev, ...newItems]);
          }

          if (newItems.length < 20) {
            setHasMore(false);
          }
        }
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setError(error);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, [queries.type, queries.query, page]);

  return {
    data,
    setData,
    isLoading,
    error,
    hasMore,
    hasFetched,
    loadMore,
  };
};

export default useFetchSearchData;
