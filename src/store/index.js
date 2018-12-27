import { createStore } from 'redux';
import itemReducer from '../reducers/item';

const store = createStore(itemReducer);

export default store;
