/**
 * Create the store with dynamic reducers
 */

import { applyMiddleware, createStore, compose } from 'redux';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import createReducer from './reducers';
import rootSaga from './rootSaga';

import { InjectedStore, ApplicationRootState } from '../types';

export default function configureStore(
  initialState: ApplicationRootState | {} = {},
) {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  const middlewares = [sagaMiddleware];

  const enhancers = [
    applyMiddleware(...middlewares),
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  let enhancer: any;
  
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    enhancer = composeWithDevTools(...enhancers);
  } else {
    enhancer = compose(...enhancers);
  }

  const store = createStore(
    createReducer(),
    initialState,
    enhancer,
  ) as InjectedStore;

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // We tell redux saga to start the auth saga
  store.runSaga(rootSaga, {});
  
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      forceReducerReload(store);
    });
  }

  return store;
}