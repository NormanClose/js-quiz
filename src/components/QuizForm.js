import React from 'react';
import { connect } from 'react-redux';
import Prism from 'prismjs';

export class QuizForm extends React.Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  state = {
    radio: 'yes',
    answer1: false,
    answer2: false,
    answer3: false,
    answer4: false,
    answer5: false,
    answer6: false
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

  //https://techblog.commercetools.com/seven-patterns-by-example-the-many-ways-to-type-radio-in-react-bfe14322bb6f
//http://react.tips/radio-buttons-in-reactjs/
  //https://stackoverflow.com/questions/45450285/radio-input-onchange-only-fires-once
  getAnswerInput = (inputType, inputText, checkMarkType, questionNumber) => {
    // var return false
    // if (questionNumber === 1) {
    //   return this.state.answer1
    // }
    // if (questionNumber === 2) {
    //   return this.state.answer2
    // }
    // if (questionNumber === 3) {
    //   return this.state.answer3
    // }
    // if (questionNumber === 4) {
    //   return this.state.answer4
    // }
    // if (questionNumber === 5) {
    //   return this.state.answer5
    // }
    // if (questionNumber === 6) {
    //   return this.state.answer6
    // }
    console.log(questionNumber);
    var answer = <div className="tick-container">
    {inputText}
    <input type={inputType} name='answerGroup' checked={this.getCheckedState(questionNumber)} onChange={this.onAnswerChange()} value="{questionNumber.toString()}"/>
    <span className={checkMarkType}></span>
    </div>;
    return answer
  }

  getCheckedState = (questionNumber) => {
    if (questionNumber === 1) {
      return this.state.answer1
    }
    if (questionNumber === 2) {
      return this.state.answer2
    }
    if (questionNumber === 3) {
      return this.state.answer3
    }
    if (questionNumber === 4) {
      return this.state.answer4
    }
    if (questionNumber === 5) {
      return this.state.answer5
    }
    if (questionNumber === 6) {
      return this.state.answer6
    }
  }

  onAnswerChange = (changeEvent) => {
    console.log('trigger OnAnswerChange');
    if (changeEvent === undefined) {
      return
    }
console.log('Here is the changeEvent.target.value')
    console.log(changeEvent.target.value);
    //console.log(changeEvent.target.value);
    // if (questionNumber === 1) {
    //   this.state.answer1 = true
    // }
    // if (questionNumber === 2) {
    //   this.state.answer2 = true
    // }
    // if (questionNumber === 3) {
    //   this.state.answer3 = true
    // }
    // if (questionNumber === 4) {
    //   this.state.answer4 = true
    // }
    // if (questionNumber === 5) {
    //   this.state.answer5 = true
    // }
    // if (questionNumber === 6) {
    //   this.state.answer6 = true
    // }
  };

  onRadioChange = (yesorno) => {
    console.log('new radio clicked', yesorno);
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

        <div>
          <input
            type="radio"
            value="yes"
            name="answer"
            checked={this.state.radio === 'yes'}
            onChange={(e) => this.onRadioChange('yes')}
          />
          <input
            type="radio"
            value="no"
            name="answer"
            checked={this.state.radio === 'no'}
            onChange={(e) => this.onRadioChange('no')}
          />
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