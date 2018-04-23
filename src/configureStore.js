import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './js/reducers';
import rootSaga from './js/sagas';
import { loadState, saveState } from './js/helpers/local-storage';
import throttle from './js/helpers/throttle';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()
const configureStore = () => {
  const persistedState = loadState();
  
  let store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware)
    )
  );
  sagaMiddleware.run(rootSaga)
  
  store.subscribe(throttle(() =>{
    saveState({
      todos: store.getState().todos
    });
  }));

  return store;
};



export default configureStore;