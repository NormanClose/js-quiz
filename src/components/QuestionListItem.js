import React from 'react';
import { Link } from 'react-router-dom';

const QuestionListItem = ({ id, language, level, category, question }) => (
    <Link className='list-item' to={`question/edit/${id}`}>
      <h3 className='list-item__data list-item__data--1of3'>{level}</h3>
      <h3 className='list-item__data list-item__data--2of3'>{category}</h3>
      <h3 className='list-item__data list-item__data--3of3'>{question}</h3>
    </Link>
);

export default QuestionListItem;