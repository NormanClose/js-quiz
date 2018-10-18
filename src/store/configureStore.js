import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import questionsReducer from '../reducers/questions';
import categoriesReducer from '../reducers/categories';
import filtersReducer from '../reducers/filters';
import quizStateReducer from '../reducers/quizState';
import quizQuestionsReducer from '../reducers/quizQuestions';
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Save to local storage
//https://stackoverflow.com/questions/37195590/how-can-i-persist-redux-state-tree-on-refresh
//https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage


export default () => {
  const persistedState = loadState();
  const store = createStore(
    combineReducers({
      questions: questionsReducer,
      auth: authReducer,
      categories: categoriesReducer,
      filters: filtersReducer,
      quizState: quizStateReducer,
      quizQuestions: quizQuestionsReducer
    }), persistedState,
    composeEnhancers(applyMiddleware(thunk))
  );

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  return store;
};
