import React from 'react';
import { Time } from '../common/time/time';
import classes from './create-task.module.css';
import { CopyRight } from '../common/copyright/copyright';
import { Formik } from 'formik';
import { NavLink, Redirect } from 'react-router-dom';

export const CreateTask = React.memo(({createNewTask, finishCreate, isfinishCreate, listCategories}) => {
  return (
    <>
    {isfinishCreate ? <Redirect to="/" /> : ''}
    <section className="app__content">
      <header className={classes.header}>
        <Time />
        <CopyRight />
      </header>
      <Formik
        initialValues={{ text: '', }}
        validate={values => {
          const errors = {};
          if (!values.text) {
            errors.text = 'Field cannot be empty';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          createNewTask(JSON.parse(JSON.stringify(values, null, 2)));
          finishCreate();
          finishCreate();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
            <form className={classes.form} onSubmit={handleSubmit}>
              <div className={classes.form__top}>
                <NavLink className={classes.form__button} to="/">Cancel</NavLink>
                <button className={`${classes.form__button} ${classes.form__submit}`} type="submit" disabled={isSubmitting}>
                  Done
                </button>
              </div>
              <textarea
                className={classes.input}
                placeholder="What do you want to do?"
                type="text"
                name="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
              />
              <div className={classes.select}>
                <select
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="category"
                  id="slct">
                  {
                    listCategories.map(elem => {
                      return (
                        <option value={elem.name} key={elem.id}>
                          {elem.name}
                        </option>
                      );
                    })
                  }
                </select>
              </div>
              <span className={classes.form__errors}>
                {errors.text && touched.text && errors.text}
              </span>
            </form>
          )}
      </Formik>
    </section>
    </>
  );
});