import React from 'react';
import classes from './home.module.css';
import { Time } from '../common/time/time';
import {CopyRight} from '../common/copyright/copyright';
import { HomeTop } from './home-top/home-top';
import { HomeContent } from './home-content/home-content';
import { HomeCategories } from './home-categories/home-categories';
import { AddDoing } from '../common/addDoing/add';

export const Home = React.memo(({listData, showWindowAC, wantsToEdit, doneSomeList, deleteTask, listCategories}) => {
  return (
    <div className="app__content">
      <header className={classes.header}>
        <Time />
        <CopyRight />
      </header>
      <main>
        <HomeTop />
        <HomeContent doneSomeList={doneSomeList} listData={listData} deleteTask={deleteTask} listCategories={listCategories} />
        <HomeCategories listCategories={listCategories} />
      </main>
      <footer className={classes.footer}>
        <hr className={classes.footer__hr} />
        <AddDoing wantsToEdit={wantsToEdit} showWindowAC={showWindowAC} />
      </footer>
    </div>
  );
});