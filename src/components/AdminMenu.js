import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const AdminMenu = ({ startLogout }) => (
    <header className='menu'>
      <div className='content-container'>
        <div className="menu__content">
          <h2 className='menu__title'>Admin</h2>
          <Link to='/admin/question' className="button button--menu">Questions</Link>
          <Link to='/admin/category' className="button button--menu">Categories</Link>
          <button className="button button--menu" onClick={startLogout}>Logout</button>
        </div>
      </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(AdminMenu);