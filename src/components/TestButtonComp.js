import React from 'react';

export default class TestButtonComp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text : this.props.text,
      name : this.props.name,
      value : this.props.value,
      checked : this.props.checked
    };

  }

  onRadioChange = (e) => {
    console.log('test buttom comp event', e.target.value);
    this.props.onChange(e.target.value);
    //Also need to change local state
    const yesorno = e.target.value
    if (yesorno === 'yes') {
      this.setState(() => ({ checked: true }))
    }
    else {
      this.setState(() => ({ checked: true }))
    }
  };

  render() {
    if (this.props.text === '') {
      return null;
    }
    else
    {
      return (
        <div>
          {this.state.text}|
          {this.state.text}|
          {this.state.value}
          <input
            type='radio'
            name={this.state.name}
            value={this.state.value}
            checked={this.state.checked}
            onChange={this.onRadioChange}
          />
        </div>
      )
    };
  }
}
