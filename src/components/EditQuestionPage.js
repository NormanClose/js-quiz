import React from 'react';
import { connect } from 'react-redux';
import QuestionForm from '../components/QuestionForm';
import { startEditQuestion, startRemoveQuestion } from '../actions/questions';

export class EditQuestionPage extends React.Component {
  onSubmit = (question) => {
    this.props.startEditQuestion(this.props.question.id, question);
    this.props.history.push('/admin/question');
  }
  onRemove = () => {
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
          categories={this.props.categories}
        />
        <button 
          className='button button--secondary' 
          onClick={this.onRemove}>Remove Question
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const question = state.questions.find((question) => question.id === props.match.params.id)

  return {
    question,
    categories: state.categories
  };

}

const mapDispatchToProps = (dispatch) => ({
  startEditQuestion: (id, question) => dispatch(startEditQuestion(id, question)),
  startRemoveQuestion: (data) => dispatch(startRemoveQuestion(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionPage);