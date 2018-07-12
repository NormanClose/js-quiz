import React from 'react';
import CategoryList from './CategoryList';
import { Link } from 'react-router-dom';
import AdminMenu from './AdminMenu';

const CategoryDashboardPage = () => (
  <div className='content-container'>
    <div>
      <AdminMenu />
      <h3>Category Dashboard</h3>
      <Link to='/admin/category/add' className='button'>Add Category</Link>
      <CategoryList />
    </div>
  </div>
);

export default CategoryDashboardPage;