import React from 'react';
import classes from './copyright.module.css';

export const CopyRight = React.memo(() => {
  return (
    <div>
      ©<span className={classes.copyright__span}>romankrentovsky</span>
    </div>
  )
});