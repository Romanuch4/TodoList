import React from 'react';
import classes from './home-categories.module.css';
import { CategoriesItem } from './categories-item/categories-item';

export const HomeCategories = React.memo(({listCategories}) => {
  return (
    <section className={classes.categories}>
      <h3 className={classes.categories__title}>
        Lists
      </h3>
      <CategoriesItem listCategories={listCategories} />
    </section>
  )
});