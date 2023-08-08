import React, { useState } from 'react';
// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import classes from './CourseInput.module.css';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? 'red' : 'black')};
//   }

//   & input {
//     font: inherit;
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
//     background: ${(props) => (props.invliad ? '#ffd7d7' : 'transparent')};
//     line-height: 1.5rem;
//     padding: 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredInput, setEnteredInput] = useState('');
  const [isValid, setIsValid] = useState(true);

  const inputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredInput(event.target.value);
  };

  const submitGoalHandler = (event) => {
    event.preventDefault();
    if (enteredInput.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredInput);
  };

  return (
    <form onSubmit={submitGoalHandler}>
      <div
        className={`${classes['form-control']} ${!isValid && classes.invalid}`}
      >
        <label>Course Goal</label>
        <input type='text' onChange={inputChangeHandler} />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
