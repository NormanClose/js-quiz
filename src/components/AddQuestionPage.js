import React from 'react';
import { connect } from 'react-redux';
import QuestionForm from '../components/QuestionForm';
import { startAddQuestion } from '../actions/questions';

export class AddQuestionPage extends React.Component {
  onSubmit = (question) => {
    this.props.startAddQuestion(question);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h1>
          Add Question
        </h1>
        <QuestionForm
            onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddQuestion: (question) => dispatch(startAddQuestion(question))
})

export default connect(undefined, mapDispatchToProps)(AddQuestionPage);