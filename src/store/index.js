import { createStore, applyMiddleware } from 'redux';
import createDebounceMiddleware from 'redux-debounced';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import itemReducer from '../reducers/item';
import { doStartPollingItems } from '../actions/item';
import rootSaga from '../sagas';

const debounce = createDebounceMiddleware();
const saga = createSagaMiddleware();

const store = createStore(
  itemReducer,
  undefined, // preloadedState - we don't need an initial state as we will run the root saga immediately
  applyMiddleware(
    ...(process.env.NODE_ENV === 'development'
      ? [debounce, createLogger(), saga]
      : [debounce, saga]),
  ),
);

// Run the root saga (ie: start listening for actions)
saga.run(rootSaga);

// Start items polling
store.dispatch(doStartPollingItems());

export default store;
