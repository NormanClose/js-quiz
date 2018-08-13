import React from 'react';

// A Select with dynamically created options
// React Select Box - https://codepen.io/blehr/pen/pbjNGR

// NOTE: User a different select for look ups
// as no validation

export default class SelectBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = 
    { 
      onCategoryChange: props.onCategoryChange
    };

  }
  onCategoryChange(e) {
    this.state.onCategoryChange(e.target.value);
  }
  render() {
    return (
      <div>
        <select value={this.props.value} onChange={this.onCategoryChange.bind(this)} name='category' className = 'select select--left'>
          {this.props.categories.map(option => {
            return <option value={option.category} key={option.category} >{option.category}</option>
          })}
        </select>
      </div>
    )
  }
}