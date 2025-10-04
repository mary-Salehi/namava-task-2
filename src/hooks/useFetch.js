import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const API_BASE = "https://www.namava.ir/api";

export const useFetch = (url, queries, isPaginated = true) => {
  const [data, setData] = useState(isPaginated ? [] : null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const params = { ...queries };
  if (isPaginated) {
    params.page = page;
    params.count = 20;
  }

  useEffect(() => {
    if (isPaginated) {
      setData([]);
      setPage(1);
      setHasMore(true);
    } else {
      setData(null);
    }
    setError(null);
  }, [queries.query, queries.type, isPaginated]);

  const loadMore = useCallback(() => {
    if (!hasMore || isLoading || !isPaginated) return;
    setPage((prevPage) => prevPage + 1);
  }, [hasMore, isLoading, isPaginated]);

  useEffect(() => {
    if (!url) {
      setData(isPaginated ? [] : null);
      return;
    }

    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get(`${API_BASE}/${url}`, {
          params,
          signal: controller.signal,
        });

        const responseResult = response.data.result;

        if (isPaginated) {
          const newItems =
            responseResult?.result_items?.[0]?.groups?.Media?.items || [];
          setData((prev) => [...prev, ...newItems]);

          if (newItems.length < 20) {
            setHasMore(false);
          }
        } else {
          setData(responseResult);
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
  }, [queries, page, isPaginated]);

  return { data, isLoading, error, hasMore, loadMore };
};
