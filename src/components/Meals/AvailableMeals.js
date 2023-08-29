import React, { useEffect } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem';
import styles from './AvailableMeals.module.css';

const AvailableMeals = () => {
    useEffect(() => {
      const fetchMeals = async () => {
          const response = await fetch('https://console.firebase.google.com/project/food-react-e2f74/database/food-react-e2f74-default-rtdb/data/~2F/Meals.json')
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
      };

      fetchMeals();
    }, []);

    const mealsList = DUMMY_MEALS.map((meal) => (
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