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
    //Do NOT do - let allCategories = this.props.categories;
    //As do NOT want to change this.props.categories
    let allCategories = JSON.parse(JSON.stringify(this.props.categories));

    var found = allCategories.find(function(element) {
      return element.category === 'All Categories'
    });
    if (found === undefined) {
      allCategories.unshift({id:1, category:'All Categories'});
    }

    return (
      <div>
        <select value={this.props.value} onChange={this.onCategoryChange.bind(this)} name='category' className = 'select select--left'>
          {allCategories.map(option => {
            return <option value={option.category} key={option.category} >{option.category}</option>
          })}
        </select>
      </div>
    )
  }
}