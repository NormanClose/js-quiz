import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => (
  <div>
    <div>
      <Link to='/admin'>Admin Menu</Link>
    </div>
    <div>
      <Link to='/startQuiz'>Start Quiz</Link>
    </div>
  </div>
);

export default DashboardPage;
