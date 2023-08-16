import React from 'react';

import styles from './MealItem.module.css';

const MealItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <div className={styles.meal}>
        <li className={styles.Item} onClick={deleteHandler}>
            {props.children}
        </li>
    </div>
  );
};

export default MealItem;