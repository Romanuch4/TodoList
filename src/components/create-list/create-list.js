import React from 'react';
import { Time } from '../common/time/time';
import { CopyRight } from '../common/copyright/copyright';
import { Formik } from 'formik';
import { NavLink, Redirect } from 'react-router-dom';
import classes from './create-list.module.css';

export const CreateList = React.memo(({createNewList, finishCreate, isfinishCreate}) => {
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
            createNewList(JSON.parse(JSON.stringify(values, null, 2)));
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
                <input
                  className={classes.input}
                  placeholder="New list"
                  type="text"
                  name="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.text}
                />

                <label >
                  Colour: 
                <input
                  placeholder="Colour"
                  type="color"
                  name="color"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                </label>
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