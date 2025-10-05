import { useEffect, useState } from "react";
import apiService from "../services/apiService";

const cachedPreview = new Map();

export const useMediaPreview = (movieId, isHovered) => {
  const [briefPreview, setBriefPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const END_POINT = `/v1.0/medias/${movieId}/brief-preview`;

  useEffect(() => {
    if (!isHovered || !movieId) {
      setBriefPreview(null);
      return;
    }

    // Use cached data if exists
    const cacheKey = movieId;
    if (cachedPreview.has(cacheKey)) {
      setBriefPreview(cachedPreview.get(cacheKey));
      return;
    }

    const controller = new AbortController();

    const fetchPreview = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await apiService({endpoint: END_POINT})
  
        cachedPreview.set(cacheKey, response.data.result);
        setBriefPreview(response.data.result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
          console.error("Error fetching preview:", err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPreview();

    return () => {
      controller.abort();
    };
  }, [movieId, isHovered]);

  return { briefPreview, error, isLoading };
};
