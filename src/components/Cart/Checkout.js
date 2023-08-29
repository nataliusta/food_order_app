import React from 'react';

import styles from './Checkout.module.css';

const Checkout = () => {
    return (
        <form>
            <div className={styles.control}>
                <label htmlFor='name'>Your name</label>
                <input type='text' id='name'></input>
            </div>
            <div className={styles.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street'></input>
            </div>
            <div className={styles.control}>
                <label htmlFor='post'>Postal Code</label>
                <input type='text' id='post'></input>
            </div>
            <div className={styles.control}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city'></input>
            </div>
            <button>Confirm</button>
        </form>
    )
};

export default Checkout;