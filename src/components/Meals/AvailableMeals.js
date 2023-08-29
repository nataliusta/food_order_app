import React, { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem';
import styles from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

    useEffect(() => {
      const fetchMeals = async () => {
          const response = await fetch('https://food-react-e2f74-default-rtdb.europe-west1.firebasedatabase.app/Meals.json')
        .then();
        const responseData = await response.json();

        const loadedMeals = [];

        for (const key in responseData) {
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }
        setMeals(loadedMeals);
      };

      fetchMeals();
    }, []);

    const mealsList = meals.map((meal) => (
      <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
      />
    ));

    return (
        <section className={styles.meals}>
          <Card>
            <ul>
                {mealsList}
            </ul>
          </Card>

        </section>
    );
};

export default AvailableMeals;