import React from 'react';
import QuestionList from './QuestionList';
import { Link } from 'react-router-dom';
import AdminMenu from './AdminMenu';
//import ExpenseListFilters from './ExpenseListFilters';
//import ExpensesSummary from './ExpensesSummary';

//Eventually
//<QuestionSummary />
//<QuestionListFilters />
//<QuestionList />

const QuestionDashboardPage = () => (
  <div className='content-container'>
  <div>
    <AdminMenu />
    <h3>Question Dashboard</h3>
    <Link to='/admin/question/add' className='button'>Add Question</Link>
    <QuestionList />
  </div>
  </div>
);

export default QuestionDashboardPage;