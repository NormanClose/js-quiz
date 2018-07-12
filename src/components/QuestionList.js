import React from 'react';
import { connect } from 'react-redux';
import QuestionListItem from './QuestionListItem';
//import selectQuestions from '../selectors/questions';

export const QuestionList = (props) => (
  <div>
    <div className='list-header'>
      <div className = 'show-for-mobile'>Questions</div>
      <div className = 'show-for-desktop list-header__title--1of3'>Level</div>
      <div className = 'show-for-desktop list-header__title--2of3'>Category</div>
      <div className = 'show-for-desktop list-header__title--3of3'>Question</div>
    </div>
    <div className='list-body'>
      {
        props.questions.length === 0 ? (
          <p className='list-item list-item--message'>No questions</p>
        ) : (
            props.questions.map((question) => {
              return <QuestionListItem key={question.id} {...question} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  };
};

export default connect(mapStateToProps)(QuestionList);
