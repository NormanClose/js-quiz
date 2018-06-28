import React from 'react';
import { Link } from 'react-router-dom';

const QuestionListItem = ({ id, language, level, question }) => (
    <Link className='list-item' to={`/edit/${id}`}>
      <div>
        <h3 className='list-item__title'>{question}</h3>
        <span className='list-item__subtitle'>{language}</span>
      </div>
      <h3 className='list-item__data'>{level}</h3>
    </Link>
);

export default QuestionListItem;