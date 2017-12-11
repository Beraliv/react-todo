import { createStore } from 'redux';

import rootReducer from './js/reducers'

import { loadState, saveState } from './js/helpers/local-storage';
import throttle from './js/helpers/throttle';

const configureStore = () => {
  const persistedState = loadState();
  
  let store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  store.subscribe(throttle(() =>{
    saveState({
      todos: store.getState().todos
    });
  }));

  return store;
};



export default configureStore;