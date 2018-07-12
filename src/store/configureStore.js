import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import questionsReducer from '../reducers/questions';
import categoriesReducer from '../reducers/categories';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      questions: questionsReducer,
      auth: authReducer,
      categories: categoriesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
