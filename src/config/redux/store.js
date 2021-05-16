import {configureStore} from '@reduxjs/toolkit';
import {counterReducer} from './reducer';

const store = configureStore({reducer: counterReducer});

console.log(store.getState());

export default store;
