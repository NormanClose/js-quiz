import React from 'react';

const CategoryListItem = ({ id, category }) => (
    <div>
      <h3 className='list-item__data list-item__data--1of3'>{category}</h3>
    </div>
);

export default CategoryListItem;