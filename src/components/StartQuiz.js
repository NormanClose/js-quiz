import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setShowAnswers } from '../actions/quizState';

export class StartQuiz extends React.Component {
  state = {
    buttonClass: 'button button--form button--hidden',
    showAnswers: null
  };
  onShowAnswersTrue = () => {
    this.props.setShowAnswers(true);
    this.state.showAnswers = true;
    this.state.buttonClass = 'button button--form';
  };
  onShowAnswersFalse = () => {
    this.props.setShowAnswers(false);
    this.state.showAnswers = false;
    this.state.buttonClass = 'button button--form';
  };
  render() { 
    return (
    <div className='content-container'>
      <div className='input-group'>
        <div className='radio-group'>
        Almost there. Just pick one of the options below :-
          <div>
            <p></p>
            <label className='tick-container'>
              <input 
                type='radio' 
                name='showAnswers' 
                id='1' 
                checked={this.state.showAnswers  == true} 
                onChange={this.onShowAnswersTrue}
              />
              <span className='radio-checkmark'></span>
              Show answers after each question
            </label>
          </div>
          <div>
          <p></p>
            <label className='tick-container'>
              <input 
                type='radio' 
                name='showAnswers' 
                id='2' 
                checked={this.state.showAnswers == false} 
                onChange={this.onShowAnswersFalse}
              />
              <span className='radio-checkmark'></span>
              Only show number of correct answers at end
            </label>
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
          <div>
            <Link to='/loadingQuiz' className={this.state.buttonClass}>
              Start Quiz
            </Link>
          </div>
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
