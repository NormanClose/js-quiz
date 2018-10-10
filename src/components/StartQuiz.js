import React from 'react';
import { connect } from 'react-redux';
import { setShowAnswers } from '../actions/quizState';

export class StartQuiz extends React.Component {

 render() { 
  return (
  <div>
    Start Quiz
    Almost there.  Just pick from the 2 options below to start.
    <div className='radio-group'>
      <div>
        <label className='tick-container'>
          <input type='radio' name='showAnswers' id='1' value='true' checked={this.props.quizState.showAnswers} />
          <span className='radio-checkmark'></span>
          Show answers after each question
        </label>
      </div>
      <div>
        <label className='tick-container'>
          <input type='radio' name='showAnswers' id='2' value='false' checked={!this.props.quizState.showAnswers} />
          <span className='radio-checkmark'></span>
          Only show number of correct answers at end
        </label>
      </div>
    </div>
  </div>
  );
  };
};

const mapStateToProps = (state) => ({
  quizState: state.quizState
});

const mapDispatchToProps = (dispatch) => ({
  setShowAnswers: (showAnswers) => dispatch(setShowAnswers(showAnswers))
});

export default connect(mapStateToProps, mapDispatchToProps)(StartQuiz);
