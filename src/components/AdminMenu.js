import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const AdminMenu = () => (
    <div>
      <Link to='/admin/add'>Add Question</Link>
      <Link to='/admin/dashboard'>Admin Dashboard</Link>
      <Link to='/admin/logout'>Logout</Link>s
    </div>
);

export default AdminMenu;