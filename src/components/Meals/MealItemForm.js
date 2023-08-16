import React from 'react';

import styles from './MealItemForm.module.css';
import Input from '../UI/Input';

const MealItemForm = (props) => {

    const onClickHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form className={styles.form}>
            <Input label='Amount' input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button onClick={onClickHandler}>+ Add</button>
      </form>
    )
};

export default MealItemForm;