import React from 'react';

import styles from './MealItemForm.module.css';
import Input from '../UI/Input';

const MealItemForm = (props) => {

    const onClickHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form className={styles.form}>
            <label htmlFor="current-savings"></label>
            <Input />
            <button onClick={onClickHandler}>+ Add</button>
      </form>
    )
};

export default MealItemForm;