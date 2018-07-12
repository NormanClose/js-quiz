import React from 'react';
import { connect } from 'react-redux';
import QuestionForm from '../components/QuestionForm';
import { startAddQuestion } from '../actions/questions';
import AdminMenu from './AdminMenu';

export class AddQuestionPage extends React.Component {
  onSubmit = (question) => {
    this.props.startAddQuestion(question);
    this.props.history.push('/admin/question');
  }
  render() {
    return (
      <div className='content-container'>
        <AdminMenu />
        <h3>
          Add Question
        </h3>
        <QuestionForm
          question={{}}
          onSubmit={this.onSubmit}
          categories={this.props.categories}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch) => ({
  startAddQuestion: (question) => dispatch(startAddQuestion(question))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestionPage);