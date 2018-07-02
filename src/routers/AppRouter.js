import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import AddQuestionPage from '../components/AddQuestionPage';
import EditQuestionPage from '../components/EditQuestionPage';
import QuestionDashboardPage from '../components/QuestionDashboardPage';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/admin/add" component={AddQuestionPage} />
        <PrivateRoute path="/admin/edit/:id" component={EditQuestionPage} />
        <PrivateRoute path="/admin/dashboard" component={QuestionDashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
