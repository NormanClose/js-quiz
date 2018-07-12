import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../components/CategoryForm';
import { startAddCategory } from '../actions/categories';
import AdminMenu from './AdminMenu';

export class AddCategoryPage extends React.Component {
  onSubmit = (category) => {
    console.log('category is ', category)
    this.props.startAddCategory(category);
    this.props.history.push('/admin/category');
  }
  render() {
    return (
      <div className='content-container'>
        <AdminMenu />
        <h3>
          Add Category
        </h3>
        <CategoryForm
          category={{}}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddCategory: (category) => dispatch(startAddCategory(category))
})

export default connect(undefined, mapDispatchToProps)(AddCategoryPage);