import React from 'react';
import { connect } from 'react-redux';
import { setCategoryFilter, setLevelFilter } from '../actions/filters';

export class QuestionListFilters extends React.Component {
  state = {
    
  };

  onCategoryChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onLevelChange = (e) => {
    this.props.setLevelFilter(e.target.value);
  };

  render() {
    return (
      <div className='content-container'>
        <div className='input-group'>
          <div className='input-group__item'>
            <input
              className = 'text-input'
              type='text'
              placeholder = 'Search Categories'
              value={this.props.filters.category}
              onChange={this.onTextChange}
            />
          </div>
          <div className='input-group__item'>
            <select
              className = 'select'
              value='All'
              onChange={this.onLevelChange}
            >
              <option value="All">All Levels</option>
              <option value="1">Level 1</option>
              <option value="2">Level 2</option>
              <option value="3">Level 2</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setCategoryFilter: (category) => dispatch(setCategoryFilter(category)),
  setLevelFilter: (level) => dispatch(setLevelFilter(level))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionListFilters);
