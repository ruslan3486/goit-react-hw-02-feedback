import React from 'react';
import s from './feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          className={s.button_name}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

//  <div>
//     <button type='button' onClick={onIGoodncrement}>Good</button>
//     <button type='button' onClick={onINeutralncrement}>Neutral</button>
//     <button type='button' onClick={OnBadIncrement}>Bad</button>
//  </div>
