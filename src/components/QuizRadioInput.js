import React from 'react';

const QuizRadioInput = ({ text, type, value, name, checked, onRadioChange, myClass }) => {
  if (text === '') {
    return null;
  }
  else
  {
    return (
      <div className="tick-container">
        {text}
        <input
          type='radio'
          value={value}
          name={name}
          checked={checked}
          onChange={onRadioChange}
        />
        <span className={myClass}></span>
        
      </div>
    )
  };
}

export default QuizRadioInput;