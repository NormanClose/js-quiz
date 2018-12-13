import React from 'react';
import { connect } from 'react-redux';
import Prism from 'prismjs';
import QuizRadioInput from './QuizRadioInput';

export class QuizForm extends React.Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  state = {
    questionType: 'single',
    answer1: false,
    answer2: false,
    answer3: false,
    answer4: false,
    answer5: false,
    answer6: false
  }

  onRadioChange = (yesorno) => {
    console.log('onRadionChange');
    //const newValue = e.target.value;
    //console.log('newValue', newValue);
  };

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

  render() {
    
    //https://www.w3schools.com/html/html_form_input_types.asp
    //https://reactjs.org/docs/conditional-rendering.html
    //Radio buttons do not use name attribute so manage through onChange
    //https://stackoverflow.com/questions/46554424/radio-button-error-for-name-attribute-in-react
    //Good example above but need to also support multiple choice
    
    if(this.props.question.questionType === 'multi') {
      selectType = 'checkbox'
      checkMarkType = 'box-checkmark'
      //this.setState(() => ({ questionType: 'single' }));
    }
    else
    {
      var selectType = 'radio';
      var checkMarkType = 'radio-checkmark'
      //this.setState(() => ({ questionType: 'multi' }));
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
        
        <div>
          <QuizRadioInput
            text={this.props.question.answer1}
            type={selectType}
            value="1"
            checked={this.state.answer1}
            onRadioChange={this.onRadioChange('no')}
            myClass={checkMarkType}
          />
          <QuizRadioInput
            text={this.props.question.answer2}
            type={selectType}
            value="2"
            checked={this.state.answer2}
            onRadioChange={(e) => this.onRadioChange('no')}
            myClass={checkMarkType}
          />
          <QuizRadioInput
            text={this.props.question.answer3}
            type={selectType}
            value="3"
            checked={this.state.answer3}
            onChange={(e) => this.onRadioChange('no')}
            myClass={checkMarkType}
          />
          <QuizRadioInput
            text={this.props.question.answer4}
            type={selectType}
            value="4"
            checked={this.state.answer4}
            onChange={(e) => this.onRadioChange('no')}
            myClass={checkMarkType}
          />
          <QuizRadioInput
            text={this.props.question.answer5}
            type={selectType}
            value="5"
            checked={this.state.answer5}
            onChange={(e) => this.onRadioChange('no')}
            myClass={checkMarkType}
          />
          <QuizRadioInput
            text={this.props.question.answer6}
            type={selectType}
            value="6"
            checked={this.state.answer6}
            onChange={(e) => this.onRadioChange('no')}
            myClass={checkMarkType}
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