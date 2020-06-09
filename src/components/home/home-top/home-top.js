import React from 'react';
import classes from './home-top.module.css';

export const HomeTop = React.memo(() => {
  return (
    <section className={classes.top}>
      <h1 className={classes.top__title}>
        To do
      </h1>
    </section>
  );
});