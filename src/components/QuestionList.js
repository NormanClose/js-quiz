import React from 'react';
import { connect } from 'react-redux';
import QuestionListItem from './QuestionListItem';
//import selectQuestions from '../selectors/questions';

export const QuestionList = (props) => (
  <div className='content-container'>
  <div className='list-header'>
    <div className = 'show-for-mobile'>Questions</div>
    <div className = 'show-for-desktop'>Level</div>
    <div className = 'show-for-desktop'>Category</div>
    <div className = 'show-for-desktop'>Question</div>
  </div>
     <div className="list-body">
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
