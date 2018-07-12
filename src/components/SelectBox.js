import React from 'react';

// a select with dynamically created options
// React Select Box - https://codepen.io/blehr/pen/pbjNGR

export default class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = 
    { 
      value: 'Select an Option',
      categories: props.categories
    };

  }
  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div>
        <label htmlFor="Category" >Category</label>
        <select value={this.state.value} onChange={this.onChange.bind(this)} >
          {this.state.categories.map(option => {
            return <option value={option.category} key={option.category} >{option.category}</option>
          })}
        </select>
      </div>
    )
  }
}