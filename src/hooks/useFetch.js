import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const API_BASE = "https://www.namava.ir/api";

export const useFetch = (url, queries) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setData([]);
    setPage(1);
    setHasMore(true);
    setError(null);
  }, [url, queries?.query, queries?.type]);

  const loadMore = useCallback(() => {
    if (!hasMore || isLoading) return;
    setPage((prevPage) => prevPage + 1);
  }, [hasMore, isLoading]);

  useEffect(() => {
    const controller = new AbortController();

    if (!queries.query) {
      return () => controller.abort();
    }

    async function fetchData() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get(`${API_BASE}/${url}`, {
          params: {
            ...queries,
            page,
            count: 20,
          },
          signal: controller.signal,
        });
        const newItems =
          response.data.result?.result_items?.[0]?.groups?.Media?.items || [];

        setData((prev) => [...prev, ...newItems]);

        if (newItems.length < 20) {
          setHasMore(false);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, queries, page]);

  return { data, isLoading, error, hasMore, loadMore };
};
