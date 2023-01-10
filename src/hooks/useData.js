import { useState, useEffect } from 'react';

export const useData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await (await fetch(url)).json();
        setData(response);
      } catch (error) {
        setData([]);
      }
    };
    fetchData();
  }, [url]);
  return data;
};
