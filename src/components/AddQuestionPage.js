import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import QuestionForm from '../components/QuestionForm';

const AddQuestionPage = () => (
  <div>
    <h1>
      Add Question
    </h1>
    <QuestionForm />
  </div>
);

export default AddQuestionPage;