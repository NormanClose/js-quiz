import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const AdminMenu = () => (
    <div>
      <Link to='/admin/add'>Add Question</Link>
    </div>
);

export default AdminMenu;