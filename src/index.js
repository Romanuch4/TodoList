import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import {Store} from './state/store';
import { AppContainer } from './AppContainer';
import './index.css';
import * as serviceWorker from './serviceWorker';

const rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={Store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree();

serviceWorker.register();
