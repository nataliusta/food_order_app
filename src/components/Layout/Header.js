import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return(
        <Fragment>
            <header className={styles.header}>
                <h1>Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food' />
            </div>
        </Fragment>
    )
};

export default Header;