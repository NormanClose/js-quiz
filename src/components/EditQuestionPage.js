import React from 'react';
import { connect } from 'react-redux';
import QuestionForm from '../components/QuestionForm';
import { startEditQuestion, startRemoveQuestion } from '../actions/questions';

export class EditQuestionPage extends React.Component {
  onSubmit = (question) => {
    this.props.startAddQuestion(this.props.question.id, question);
    this.props.history.push('/');
  }
  onRemove = () => {
    console.log('Question to remove', this.props.question);
    this.props.startRemoveQuestion({id: this.props.question.id});
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h1>
          Edit Question
        </h1>
        <QuestionForm
          question={this.props.question}
          onSubmit={this.onSubmit}
        />
        <button 
          className='button button--secondary' 
          onClick={this.onRemove}>Remove Question
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  question: state.questions.find((question) => question.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
  startEditQuestion: (id, question) => dispatch(startEditQuestion(id, question)),
  startRemoveQuestion: (data) => dispatch(startRemoveQuestion(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionPage);