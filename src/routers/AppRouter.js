import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import AddQuestionPage from '../components/AddQuestionPage';
import AdminMenu from '../components/AdminMenu';
import EditQuestionPage from '../components/EditQuestionPage';
import QuestionDashboardPage from '../components/QuestionDashboardPage';
import CategoryDashboardPage from '../components/CategoryDashboardPage';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AddCategoryPage from '../components/AddCategoryPage';
import StartQuiz from '../components/StartQuiz';
import LoadingQuiz from '../components/LoadingQuiz';
import QuizForm from '../components/QuizForm';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/startQuiz" component={StartQuiz} exact={true} />
        <PrivateRoute path="/loadingQuiz" component={LoadingQuiz} exact={true} />
        <PrivateRoute path="/question/:id" component={QuizForm} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute exact path="/admin" component={AdminMenu} />
        <PrivateRoute path="/admin/question/add" component={AddQuestionPage} />
        <PrivateRoute path="/admin/question/edit/:id" component={EditQuestionPage} />
        <PrivateRoute path="/admin/question" component={QuestionDashboardPage} />
        <PrivateRoute path="/admin/category/add" component={AddCategoryPage} />
        <PrivateRoute path="/admin/category" component={CategoryDashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
