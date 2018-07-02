import React from 'react';
import { Link } from 'react-router-dom';

const QuestionListItem = ({ id, language, level, category, question }) => (
    <Link className='list-item' to={`edit/${id}`}>
      <h3 className='list-item__data'>{level}</h3>
      <h3 className='list-item__data'>{category}</h3>
      <h3 className='list-item__data'>{question}</h3>
    </Link>
);

export default QuestionListItem;