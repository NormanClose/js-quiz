import React from 'react';

export default class QuizRadioInput extends React.Component {

  constructor(props) {
    super(props);

    //this.onRadioChange = this.OnRadioChange.bind(this);

    this.state = {
      text : 'test',
      name : 'test',
      type : this.props.type,
      value : this.props.value,
      checked : false,
      myClass : 'box-checkmark'
    };
  }

  onRadioChange = (event) => {
    this.setState({checked: true});
    console.log('new radio clicked');
    //this.props.onRadioChange
    //this.setState(() => ({checked : true}));
    // if (yesorno === 'yes') {
    //   this.setState(() => ({ radio: 'yes' }))
    // }
    // else {
    //   this.setState(() => ({ radio: 'no' }))
    // }
  };

  render() {
    if (this.props.text === '') {
      return null;
    }
    else
    {
      return (
        <div className="tick-container">
          {this.state.text}
          <input
            type='checkbox'
            name={this.state.name}
            checked={this.state.checked}
            onChange={this.onRadioChange}
          />
          <span className={this.props.myClass}></span>
          
        </div>
      )
    };
  }

}