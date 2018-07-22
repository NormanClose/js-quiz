import React from 'react';

// A Select with dynamically created options
// React Select Box - https://codepen.io/blehr/pen/pbjNGR

export default class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    
    console.log('value', props.category);

    this.state = 
    { 
      category: props.category,
      categories: props.categories,
      onCategoryChange: props.onCategoryChange
    };

  }
  onCategoryChange(e) {
    // this.setState({
    //   value: e.target.value
    // })
    this.state.onCategoryChange(e.target.value);
  }
  render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.onCategoryChange.bind(this)} >
          {this.state.categories.map(option => {
            return <option value={option.category} key={option.category} >{option.category}</option>
          })}
        </select>
      </div>
    )
  }
}