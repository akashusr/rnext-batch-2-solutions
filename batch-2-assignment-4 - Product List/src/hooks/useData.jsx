// dependencies
import { useEffect, useState } from "react";

const useData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      // response
      const res = await fetch(url);

      // checking response
      if (!res.ok) {
        throw new Error("Something wrong!");
      }

      // getting json data
      const data = await res.json();

      // update data state
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, isLoading, error };
};

export default useData;
