import React from 'react';
import { connect } from 'react-redux';
import CategoriesSelectBox from './CategoriesSelectBox';
import { setCategoryFilter, setLevelFilter } from '../actions/filters';

export class QuestionListFilters extends React.Component {
  state = {
    
  };

  onCategoryChange = (category) => {
    if (category==='All Categories') {
      this.props.setCategoryFilter('');
    } else {
      this.props.setCategoryFilter(category);
    }
  };
  onLevelChange = (e) => {
    this.props.setLevelFilter(e.target.value);
  };

  render() {
    return (
      <div className='content-container content-container--left'>
        <div className='input-group'>
          <div className='input-group__item'>
            <CategoriesSelectBox 
              categories={this.props.categories} 
              onCategoryChange={this.onCategoryChange}
              value={this.props.filters.value}
            />
          </div>
          <div className='input-group__item'>
            <select
              className = 'select'
              value={this.props.filters.level}
              onChange={this.onLevelChange}
            >
              <option value="">All Levels</option>
              <option value="1">Level 1</option>
              <option value="2">Level 2</option>
              <option value="3">Level 3</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {

  let allCategories = state.categories;

  var found = allCategories.find(function(element) {
    return element.category === 'All Categories'
  });
  if (found === undefined) {
    allCategories.unshift({id:1, category:'All Categories'});
  }

  return {
  filters: state.filters,
  categories: allCategories
  }
};

const mapDispatchToProps = (dispatch) => ({
  setCategoryFilter: (category) => dispatch(setCategoryFilter(category)),
  setLevelFilter: (level) => dispatch(setLevelFilter(level))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionListFilters);
