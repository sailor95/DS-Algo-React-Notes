import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const createConfiguredStore = (initState = {}) => {
  const reducers = {
  };

  const middlewares = [
    thunk
  ];

  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  // In development, use the browser's Redux dev tools extension if installed
  if (isDevelopment && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
  }

  const rootReducer = combineReducers({
    ...reducers,
    form: formReducer
  });

  return createStore(
    rootReducer,
    initState,
    compose(applyMiddleware(...middlewares), ...enhancers)
  );
};

export default createConfiguredStore;