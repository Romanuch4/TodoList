import React from 'react';
import classes from './add.module.css';
import { NavLink } from 'react-router-dom';

export const AddDoing = React.memo(({ showWindowAC, wantsToEdit }) => {
  const modalWindow = React.createRef();
  const modalButton = React.createRef();
  const showWindow = () => {
    showWindowAC(!wantsToEdit, modalWindow, modalButton);
  };
  return (
    <>
      <div ref={modalButton} onClick={showWindow} tabIndex="0" className={classes.addDoing}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M13 9C13 10.1046 13.8954 11 15 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H15C13.8954 13 13 13.8954 13 15V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V15C11 13.8954 10.1046 13 9 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H9C10.1046 11 11 10.1046 11 9V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V9Z" fill="#006CFF" />
        </svg>
      </div>
      <div ref={modalWindow} className={classes.window}>
        <div className={classes.window__content}>
          <div className={classes.content__item}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" fill="white" />
              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="white" />
              </mask>
              <g mask="url(#mask0)">
                <path opacity="0.3" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#006CFF" strokeWidth="2" />
                <path fillRule="evenodd" clipRule="evenodd" d="M10.556 12.9462C11.3371 13.7272 12.6034 13.7272 13.3845 12.9462L22.0378 4.29289C22.4283 3.90237 23.0615 3.90237 23.452 4.29289C23.8425 4.68342 23.8425 5.31658 23.452 5.70711L12.6738 16.4853C12.2833 16.8758 11.6501 16.8758 11.2596 16.4853C11.2355 16.4612 11.2129 16.4362 11.1918 16.4104L7.29289 12.5115C6.90237 12.1209 6.90237 11.4878 7.29289 11.0973C7.68342 10.7067 8.31658 10.7067 8.70711 11.0973L10.556 12.9462Z" fill="#006CFF" />
              </g>
            </svg>
            <NavLink to="create-task" className={classes.content__item__text}>
              Task
            </NavLink>
          </div>

          <div className={classes.content__item}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" fill="white" />
              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="white" />
              </mask>
              <g mask="url(#mask0)">
                <rect opacity="0.3" x="1" y="-7" width="22" height="10" rx="2" stroke="#006CFF" strokeWidth="2" />
                <rect opacity="0.3" x="1" y="21" width="22" height="10" rx="2" stroke="#006CFF" strokeWidth="2" />
                <rect x="1" y="7" width="22" height="10" rx="2" stroke="#006CFF" strokeWidth="2" />
              </g>
            </svg>
            <NavLink to="/create-list" className={classes.content__item__text}>
              List
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
});