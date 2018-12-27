import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import itemReducer from '../reducers/item';
import { doFetchItems } from '../actions/item';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();

const store = createStore(
  itemReducer,
  undefined, // preloadedState - we don't need an initial state as we will run the root saga immediately
  applyMiddleware(saga),
);

// Start listening for actions
saga.run(rootSaga);

// Trigger initial items fetch action
store.dispatch(doFetchItems());

export default store;