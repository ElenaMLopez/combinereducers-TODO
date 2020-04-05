import { createStore } from 'redux';
import store from './store';

const state = store.getState();

console.log(state);
