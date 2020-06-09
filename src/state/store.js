import {createStore, combineReducers} from 'redux';
import {mainReducer} from './reducers/main-reducer';


const reducers = combineReducers({main: mainReducer});
export const Store = createStore(reducers);
