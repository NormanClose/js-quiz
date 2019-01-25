import React from 'react';
import TestButtonComp from './TestButtonComp';

export default class TestRadioButtons extends React.Component {
  constructor(props) {
      super(props);

    this.state = {
      radio: 'no',
      radio2: 'no'
    }
  }

  onRadioChange = (e) => {
    console.log('event radio', e.target.value);
    const yesorno = e.target.value
    if (yesorno === 'yes') {
      this.setState(() => ({ radio: 'yes' }))
    }
    else {
      this.setState(() => ({ radio: 'no' }))
    }
  };

  onRadioChange2 = (yesorno) => {
    console.log('event radio 2', yesorno);
    if (yesorno === 'yes') {
      this.setState(() => ({ radio2: 'yes' }))
    }
    else {
      this.setState(() => ({ radio2: 'yes' }))
    }
  };

  render() {
    return (
      <div>
      Hello from Radio Buttons
      <form>    
        Example 1 - No subcomponent    
        <div>
          <input
            type="radio"
            value="yes"
            name="example1"
            checked={this.state.radio === 'yes'}
            onChange={this.onRadioChange}
          />
          <input
            type="radio"
            value="no"
            name="example1"
            checked={this.state.radio === 'no'}
            onChange={this.onRadioChange}
          />
        </div>
        Example 2 - Use subcomponent
        <div>
          <TestButtonComp
            text='radio1'
            name='example2'
            value='yes'
            checked={this.state.radio2 === 'yes'}
            onChange={this.onRadioChange2}
          />
          <TestButtonComp
            text='radio2'
            name='example2'
            value='no'
            checked={this.state.radio2 === 'no'}
            onChange={this.onRadioChange2}
          />
          <TestButtonComp
            text=''
            name='example3'
            value='hide'
            checked={this.state.radio2 === 'yes'}
            onChange={this.onRadioChange2}
          />
        </div>
      </form>
    </div>
    );
  };

}