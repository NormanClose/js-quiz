import React from 'react';
import AppRouter, { history } from '../routers/AppRouter';
import { connect } from 'react-redux';
import { addQuizQuestion } from '../actions/quizQuestions';
import lodash from 'lodash';

export class LoadingQuiz extends React.Component {

  componentDidMount() {

    console.log('didMount');

    console.log(this.props.questions);

    var questionNum = 1;

    _.forEach(_.sampleSize(this.props.questions, 4), (question) => {
                
                question.questionNumber = questionNum + '';  //Add as string
                //console.log(question);
                this.props.addQuizQuestion(question);
                //console.log(question.questionNumber);
                questionNum ++;
            })

    history.push('/question/1');

  };
  render() {
    return (
      <div className="loader">
        < img className="loader__image" src="/images/loader.gif" />
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  questions: state.questions
});

const mapDispatchToProps = (dispatch) => ({
  addQuizQuestion: (question) => dispatch(addQuizQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoadingQuiz);