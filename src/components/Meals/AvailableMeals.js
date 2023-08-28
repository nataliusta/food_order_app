import React from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem';
import styles from './AvailableMeals.module.css';

const AvailableMeals = () => {
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