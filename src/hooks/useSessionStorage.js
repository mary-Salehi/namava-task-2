import { useEffect, useState } from "react";

export const useSessionStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const saved = sessionStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    if (value === undefined || value === null || value === "") {
      sessionStorage.removeItem(key);
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};
