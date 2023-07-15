import axios from 'axios';
import { useCallback, useState } from 'react';

const URL =
  'https://kinetic-octagon-368403-default-rtdb.firebaseio.com/meals.json';

const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async ({ method, config, fn }) => {
    setIsLoading(true);
    setError(null);

    if (method === 'get')
      try {
        const res = await axios.get(URL);
        const leadedMeals = [];
        for (let key in res.data) {
          leadedMeals.push({ id: key, ...res.data[key] });
        }
        fn(leadedMeals);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
  }, []);

  return { isLoading, error, sendRequest };
};

export default useAxios;
