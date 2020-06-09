import React from 'react';
import classes from './categories-item.module.css';

export const CategoriesItem = React.memo(({listCategories}) => {
  const item = listCategories.map(elem => {
    const className = classes.categories__item;
    return (
      <li key={elem.id} className={className} style={{
        background: elem.colour,
      }}>
        <h4 className={ classes.item__title}>
          {elem.name}
        </h4>
        <div className={`${className.item__p} ${classes.item__pColor}`}></div>
      </li>
    );
  });
  return (
    <ul>
     {item} 
    </ul>
  );
});