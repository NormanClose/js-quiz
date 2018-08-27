import React from 'react';

// A Select with dynamically created options
// React Select Box - https://codepen.io/blehr/pen/pbjNGR

// NOTE: Also includes validation as called from Form

export default class SelectBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = 
    { 
      onChange: props.handleChange
    };
  }
  
  handleChange(e) {
    // this is going to call setFieldValue and manually update values.category
    this.state.value = e.target.value;
    this.props.onChange('category', e.target.value);
  }
  render() {
    return (
        <select value={this.props.value} onChange={this.handleChange.bind(this)} name='category' className = 'select' >
          {this.props.categories.map(option => {
            return <option value={option.category} key={option.category} >{option.category}</option>
          })}
        </select>
    )
  }
}