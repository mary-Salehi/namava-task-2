import axios from "axios";
import { useEffect, useState } from "react";

export const API_BASE = "https://www.namava.ir/api";

export const useFetch = (url,queries) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    if (!queries.query) {
      setData([]);
      return;
    }

    async function fetchData() {
      try {
        setIsLoading(true);
        setError(null)

        const response = await axios.get(`${API_BASE}/${url}`, {
          params: queries,
          signal: controller.signal,
        });
        const movieItems =
          response.data.result?.result_items?.[0]?.groups?.Media?.items || [];
        setData(movieItems);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error)
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url,queries]);

  return { isLoading, data, error };
};
