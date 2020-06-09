import React from 'react';
import classes from './home-content.module.css';
export const HomeContent = React.memo(({ listData, doneSomeList, deleteTask, listCategories }) => {
  const doneList = elem => { 
    doneSomeList(elem.id);
  };

  const deleteTasks = elem => {
    deleteTask(elem.parentElement.id)
  };

  const list = listData.map(elem => {
    let backgroundColor;
    for(let i = 0; i < listCategories.length; i++) {
      if(elem.category === listCategories[i].name) {
        backgroundColor = listCategories[i].colour;
        break;
      }
    };
    return (
      <li id={elem.id} className={elem.isDone ? classes.wrapper__item: ''} key={elem.id}>
        {elem.isDone ? <button onClick={elem => deleteTasks(elem.currentTarget)} className={classes.wrapper__delete}><i className="far fa-trash-alt"></i></button> : ''}
        <div className={classes.content}>
          <div className={classes.content__first}>
            <label className={classes.check}>
              <input id={elem.id} onChange={elem => doneList(elem.currentTarget)} className={classes.check__input} type="checkbox" />
              <span className={`${classes.check__box} ${elem.isDone ? classes.check__box1 : ''}`}></span>
            </label>
            <h3 className={classes.content__title}>{elem.title}</h3>
          </div>
          <div 
            className={classes.content__category} 
            style={
              {
                backgroundColor, 
              }
           }>
          </div>
        </div>
        <hr className={classes.content__hr} />
      </li>
    )
  });
  return (
    <section>
      <ul className={classes.wrapper}>
        {list}
      </ul>
    </section>
  )
});