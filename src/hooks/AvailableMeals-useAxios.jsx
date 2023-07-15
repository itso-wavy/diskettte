import { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios.jsx';

import Card from '../UI/Card.jsx';
import MealItem from './MealItem/MealItem.jsx';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meal, setMeals] = useState([]);
  const { isLoading, error, sendRequest } = useAxios();

  useEffect(() => {
    sendRequest({ method: 'get', fn: setMeals });
  }, [sendRequest]);

  return (
    <section className={classes.meals}>
      <Card>
        {error && <p className={classes.mealInfo}>error!</p>}
        {isLoading && <p className={classes.mealInfo}>Loading...</p>}
        {!isLoading && (
          <ul>
            {meal.map(meal => (
              <MealItem key={meal.id} {...meal} />
            ))}
          </ul>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
