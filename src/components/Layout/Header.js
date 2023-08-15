import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
    return(
        <Fragment>
            <header>
                <h1>Meals</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={mealsImage}></img>
            </div>
        </Fragment>
    )
};

export deafult Header;