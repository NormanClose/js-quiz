import React from 'react';
import { connect } from 'react-redux';
import Prism from 'prismjs';

export class QuizForm extends React.Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  state = {
    answer1: true,
    answer2: null,
    answer3: null,
    answer4: null,
    answer5: null,
    answer6: null
  }

  codeSnippet = (action = 'get') => {
    //https://medium.com/get-it-working/get-prismjs-working-in-react-a6d989e59290
    var question = '';
    question = this.props.question.question;
    var codeSnippet = question.substring(question.indexOf('<code>')  + 6, question.indexOf('</code>'));
    if (action === 'get') {
      return codeSnippet;
    } else if(action === 'remove') {
      question = question.replace(codeSnippet, '');
      question = question.replace('<code></code>', '');
      return question;
    }
  };

  getAnswerInput = (inputType, inputText, checkMarkType, questionNumber) => {
    var answer = <div className="tick-container">
    {inputText + '?'}
    <input type=' + inputType + ' name="question" checked={true} readOnly/>
    <span className={checkMarkType}></span>
    </div>;
    return answer
  }

  onAnswer1Change = (value) => {
    //alert('checked');
    this.setState({ answer1: value,});
  };

  onRadioChange(value) {
    console.log("radio change");
    this.setState({
      radio: value,
    })
  }

  onAnswer2Change = (e) => {
    const checked = e.target.value;
    this.setState(() => ({ checked }));
  };

  onAnswer3Change = (e) => {
    const checked = e.target.value;
    this.setState(() => ({ checked }));
  };

  onAnswer4Change = (e) => {
    const checked = e.target.value;
    this.setState(() => ({ checked }));
  };

  onAnswer5Change = (e) => {
    const checked = e.target.value;
    this.setState(() => ({ checked }));
  };

  onAnswer6Change = (e) => {
    const checked = e.target.value;
    this.setState(() => ({ checked }));
  };

  render() {
    
    //https://www.w3schools.com/html/html_form_input_types.asp
    //https://reactjs.org/docs/conditional-rendering.html
    var selectType = 'radio';
    var checkMarkType = 'radio-checkmark'
    if(this.props.question.questionType === 'multi') {
      selectType = 'checkbox'
      checkMarkType = 'box-checkmark'
    }

    let answer1 = '';
    if (this.props.question.answer1) {
      answer1 = this.getAnswerInput(selectType, this.props.question.answer1, checkMarkType, 1)
      console.log('answer1' + answer1.toString());
    }

    let answer2 = '';
    if (this.props.question.answer2) {
      answer2 = this.getAnswerInput(selectType, this.props.question.answer2, checkMarkType, 2)
    }

    let answer3 = '';
    if (this.props.question.answer3) {
      answer3 = this.getAnswerInput(selectType, this.props.question.answer3, checkMarkType, 3)
    }

    let answer4 = '';
    if (this.props.question.answer4) {
      answer4 = this.getAnswerInput(selectType, this.props.question.answer4, checkMarkType, 4)
    }

    let answer5 = '';
    if (this.props.question.answer5) {
      answer5 = this.getAnswerInput(selectType, this.props.question.answer5, checkMarkType, 5)
    }
    
    let answer6 = '';
    if (this.props.question.answer6) {
      answer6 = this.getAnswerInput(selectType, this.props.question.answer6, checkMarkType, 6)
    }
    
    return (
      <form>
        {/* This is the question with the code snippet removed */}
        <p>
          {this.codeSnippet('remove')}
        </p>
        
        {/* Next just display the code snippet if there is one */}
        <pre>
          <code className='language-javascript'>
            {`${this.codeSnippet('get')}`}
          </code>
        </pre>

        <div className='radio-group'>
          {answer1}
          {answer2}
          {answer3}
          {answer4}
          {answer5}
          {answer6}
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