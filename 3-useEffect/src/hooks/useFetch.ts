import { useState, useEffect } from "react";

export const useFetch = <T>(url: string): [T | undefined, boolean] => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data: T = await response.json();
        setData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (data) return;

    getData();
  });

  return [data, loading];
};
