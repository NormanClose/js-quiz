import React from 'react';
import { connect } from 'react-redux';
import Prism from 'prismjs';

export class QuizForm extends React.Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  codeSnippet = (action = 'get') => {
    //https://medium.com/get-it-working/get-prismjs-working-in-react-a6d989e59290
    var question = '';
    question = this.props.question.question;
    var codeSnippet = question.substring(question.indexOf('<code>'), question.indexOf('</code>')  + 7);
    if (action === 'get') {
      return codeSnippet;
    } else if(action === 'remove') {
      question = question.replace(codeSnippet, '');
      question = question.replace('<code></code>', '');
      return question;
    }
  };

  //this.props.question.question

  render() {
    
    //https://www.w3schools.com/html/html_form_input_types.asp
    //https://reactjs.org/docs/conditional-rendering.html
    let answer1 = '';
    if (this.props.question.answer1) {
      answer1 = <p>{this.props.question.answer1}</p>
    }
    

    return (
      <form>
        <p>
          {this.codeSnippet('remove')}
        </p>
        
        <pre>
          <code className='language-javascript'>
            {`${this.codeSnippet('get')}`}
          </code>
        </pre>


        <div>
          {answer1}
        </div>


        <div className='radio-group'>
          <label className='tick-container'>
            Level 1
            <input type='radio' name='level' id='1' value='1' />
            <span className='radio-checkmark'></span>
          </label>
          <label className='tick-container'>
            Level 2
            <input type='radio' name='level' id='2' value='2' />
            <span className='radio-checkmark'></span>
          </label>
          <label className='tick-container'>
            Level 3
            <input type='radio' name='level' id='3' value='3' />
            <span className='radio-checkmark'></span>
          </label>
        </div>
        <div>
          <button className='button'>Submit Answer</button>
        </div>
      </form>
    );
  };
}

const mapStateToProps = (state, props) => {
  const question = state.quizQuestions.find((question) => question.questionNumber === props.match.params.id);
  console.log(question);
  return {question};
};

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);